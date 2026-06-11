<template>
	<table class="featureTable">
		<thead>
			<tr>
				<th class="tooltip">{{ $t("feature") }}</th>
				<th>{{ $t("shared") }}</th>
				<th class="other">Netflix</th>
				<th class="other">Prime</th>
				<th class="other">Disney+</th>
				<th class="other">Crunchyroll</th>
				<th class="other">HBO</th>
				<th class="other">Paramount+</th>
				<th class="other">Hulu</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("skipIntroSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("skipIntroDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Amazon.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Disney.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Crunchyroll.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.HBO.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Hulu.skipIntro"
						class="ml-auto"
					></Switch>
				</td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("skipRecapSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("skipRecapDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="skipRecap"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.skipRecap"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other">
					<Switch
						v-model="settings.Hulu.skipRecap"
						class="ml-auto"
					></Switch>
				</td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("skipCreditsSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("skipCreditsDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="skipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="NetflixSkipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="AmazonSkipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="DisneySkipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Crunchyroll.skipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="HBOSkipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.skipCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("watchCreditsSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("watchCreditsDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="watchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="NetflixWatchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="AmazonWatchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="DisneyWatchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other">
					<Switch
						v-model="HBOWatchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.watchCredits"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("skipAdSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("skipAdDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="skipAd"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.skipAd"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Amazon.skipAd"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Disney.skipAd"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.skipAd"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("showRatingSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("showRatingDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Amazon.showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Disney.showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other">
					<Switch
						v-model="settings.HBO.showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.showRating"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("speedSliderSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("speedSliderDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Amazon.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Disney.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Crunchyroll.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.HBO.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Paramount.speedSlider"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
			<tr>
				<td class="tooltip flex">
					<p>{{ $t("hideTitlesSwitch") }}</p>
					<i-mdi-help-circle height="1rem" />
					<div
						class="tooltip-content text-primary-content"
						style="transform: unset; inset: auto auto var(--tt-off) 0%"
					>
						{{ $t("hideTitlesDescription") }}
					</div>
				</td>
				<td>
					<Switch
						v-model="hideTitles"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other">
					<Switch
						v-model="settings.Netflix.hideTitles"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other">
					<Switch
						v-model="settings.Disney.hideTitles"
						class="ml-auto"
					></Switch>
				</td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
				<td class="other"><span class="opacity-30 select-none">—</span></td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { streamingServices } from "@/constants/streamingServices"

const optionsStore = useOptionsStore()
const { settings } = storeToRefs(optionsStore)

const skipIntro = computed({
	get: () => streamingServices.every((service) => settings.value[service].skipIntro),
	set: (value) => {
		streamingServices.forEach((service) => {
			settings.value[service].skipIntro = value
		})
	},
})

const skipCredits = computed({
	get: () => streamingServices.every((service) => settings.value[service]?.skipCredits ?? true),
	set: (value) => {
		streamingServices.forEach((service) => {
			if (settings.value[service]?.skipCredits !== undefined) {
				settings.value[service].skipCredits = value
			}
		})
		if (value) {
			streamingServices.forEach((service) => {
				// @ts-expect-error ?. handles the error
				if (settings.value[service]?.watchCredits !== undefined) {
					// @ts-expect-error ?. handles the error
					settings.value[service].watchCredits = false
				}
			})
		}
	},
})

const AmazonSkipCredits = computed({
	get: () => settings.value.Amazon.skipCredits,
	set: (value) => {
		settings.value.Amazon.skipCredits = value
		if (value) settings.value.Amazon.watchCredits = false
	},
})
const NetflixSkipCredits = computed({
	get: () => settings.value.Netflix.skipCredits,
	set: (value) => {
		settings.value.Netflix.skipCredits = value
		if (value) settings.value.Netflix.watchCredits = false
	},
})
const DisneySkipCredits = computed({
	get: () => settings.value.Disney.skipCredits,
	set: (value) => {
		settings.value.Disney.skipCredits = value
		if (value) settings.value.Disney.watchCredits = false
	},
})
const HBOSkipCredits = computed({
	get: () => settings.value.HBO.skipCredits,
	set: (value) => {
		settings.value.HBO.skipCredits = value
		if (value) settings.value.HBO.watchCredits = false
	},
})

const AmazonWatchCredits = computed({
	get: () => settings.value.Amazon.watchCredits,
	set: (value) => {
		settings.value.Amazon.watchCredits = value
		if (value) settings.value.Amazon.skipCredits = false
	},
})
const NetflixWatchCredits = computed({
	get: () => settings.value.Netflix.watchCredits,
	set: (value) => {
		settings.value.Netflix.watchCredits = value
		if (value) settings.value.Netflix.skipCredits = false
	},
})
const DisneyWatchCredits = computed({
	get: () => settings.value.Disney.watchCredits,
	set: (value) => {
		settings.value.Disney.watchCredits = value
		if (value) settings.value.Disney.skipCredits = false
	},
})
const HBOWatchCredits = computed({
	get: () => settings.value.HBO.watchCredits,
	set: (value) => {
		settings.value.HBO.watchCredits = value
		if (value) settings.value.HBO.skipCredits = false
	},
})

const watchCredits = computed({
	// @ts-expect-error ?. handles the error
	get: () => streamingServices.every((service) => settings.value[service]?.watchCredits ?? true),
	set: (value) => {
		streamingServices.forEach((service) => {
			// @ts-expect-error ?. handles the error
			if (settings.value[service]?.watchCredits !== undefined) {
				// @ts-expect-error ?. handles the error
				settings.value[service].watchCredits = value
			}
		})
		if (value) {
			streamingServices.forEach((service) => {
				if (settings.value[service]?.skipCredits !== undefined) {
					settings.value[service].skipCredits = false
				}
			})
		}
	},
})
const skipAd = computed({
	get: () =>
		settings.value?.Amazon.skipAd &&
		settings.value?.Netflix.skipAd &&
		settings.value?.Disney.skipAd &&
		settings.value?.Paramount.skipAd,
	set: (value) => {
		settings.value.Amazon.skipAd =
			settings.value.Netflix.skipAd =
			settings.value.Disney.skipAd =
			settings.value.Paramount.skipAd =
				value
	},
})

const speedSlider = computed({
	get: () => streamingServices.every((service) => settings.value[service]?.speedSlider ?? true),
	set: (value) => {
		streamingServices.forEach((service) => {
			if (settings.value[service]?.speedSlider !== undefined) {
				settings.value[service].speedSlider = value
			}
		})
	},
})

const skipRecap = computed({
	get: () => settings.value.Netflix.skipRecap && settings.value.Hulu.skipRecap,
	set: (value) => {
		settings.value.Netflix.skipRecap = settings.value.Hulu.skipRecap = value
	},
})

const showRating = computed({
	// @ts-expect-error ?. handles the error
	get: () => streamingServices.every((service) => settings.value[service]?.showRating ?? true),
	set: (value) => {
		streamingServices.forEach((service) => {
			// @ts-expect-error ?. handles the error
			if (settings.value[service]?.showRating !== undefined) {
				// @ts-expect-error ?. handles the error
				settings.value[service].showRating = value
			}
		})
	},
})
const hideTitles = computed({
	get: () => settings.value?.Netflix.hideTitles && settings.value?.Disney.hideTitles,
	set: (value) => {
		settings.value.Netflix.hideTitles = settings.value.Disney.hideTitles = value
	},
})
</script>

<style scoped>
@reference "@/assets/base.css";
.featureTable {
	@apply w-full max-w-4xl border-separate border-spacing-0 rounded-xl border border-base-content/15 overflow-hidden my-2;
}
th,
td {
	text-align: center;
}
th {
	@apply px-3 py-2.5 text-xs font-semibold uppercase tracking-wider opacity-70 bg-base-content/5;
}
td {
	@apply px-3 py-2 border-t border-base-content/10;
}
tbody tr:hover td {
	@apply bg-base-content/5;
}
.featureTable tr *:nth-of-type(2) {
	@apply border-r border-base-content/15;
}
.featureTable td:first-of-type {
	text-align: left;
}
p {
	@apply m-0 text-base;
}

@media only screen and (max-width: 800px), only screen and (max-height: 600px) {
	.other {
		display: none;
	}
}
</style>
