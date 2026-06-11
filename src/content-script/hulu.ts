import { startSharedFunctions, Platforms } from "@/content-script/shared-functions"
import { sendMessage } from "webext-bridge/content-script"
// Global Variables

const { data: settings, promise } = useBrowserSyncStorage<settingsType>("settings", defaultSettings)
const config = { attributes: true, childList: true, subtree: true }

async function logStartOfAddon() {
	console.log("%cStreaming enhanced", "color: #00aeef;font-size: 2em;")
	console.log("Settings", settings.value)
}

async function startHulu() {
	await promise
	logStartOfAddon()
	startSharedFunctions(Platforms.Hulu)
	HuluObserver.observe(document, config)
}

// #region Hulu
// Works on both hulu.com (US) and hulu.jp (Japan): the player markup differs,
// so skip buttons are matched by their visible text/aria-label instead of selectors.
const introRegex = /skip intro|skip opening|オープニング(を)?スキップ|OP(を)?スキップ/i
const recapRegex = /skip recap|あらすじ(を)?スキップ|前回(の)?あらすじ/i
const genericSkipRegex = /^(skip|スキップ)$/i

type SkipKind = "intro" | "recap" | "generic"
function findSkipButton(): { el: HTMLElement; kind: SkipKind } | null {
	const candidates = Array.from(document.querySelectorAll<HTMLElement>('button, [role="button"]'))
	for (const el of candidates) {
		const text = `${el.textContent ?? ""} ${el.getAttribute("aria-label") ?? ""}`.trim()
		// skip buttons have short labels; long texts are unrelated elements
		if (!text || text.length > 40) continue
		if (introRegex.test(text)) return { el, kind: "intro" }
		if (recapRegex.test(text)) return { el, kind: "recap" }
		if (genericSkipRegex.test(text)) return { el, kind: "generic" }
	}
	return null
}

const HuluObserver = new MutationObserver(Hulu)
let lastSkipClick = 0
async function Hulu() {
	const video = document.querySelector("video") as HTMLVideoElement
	if (!video || video.paused) return
	const found = findSkipButton()
	if (!found) return
	if (found.kind === "recap") {
		if (!settings.value.Hulu?.skipRecap) return
	} else if (!settings.value.Hulu?.skipIntro) {
		return
	}
	// debounce so the same button is not clicked repeatedly while the overlay fades out
	const now = Date.now()
	if (now - lastSkipClick < 1500) return
	lastSkipClick = now
	const startTime = video.currentTime
	found.el.click()
	console.log("Hulu: skipped", found.kind, found.el)
	setTimeout(() => {
		const key = found.kind === "recap" ? "RecapTimeSkipped" : "IntroTimeSkipped"
		const diff = video.currentTime - startTime
		if (diff > 0) settings.value.Statistics[key] += diff
		settings.value.Statistics.SegmentsSkipped++
		sendMessage("increaseBadge", {}, "background")
	}, 600)
}
// #endregion

startHulu()
