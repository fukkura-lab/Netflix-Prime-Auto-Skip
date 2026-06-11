<template>
	<div class="flex items-center">
		<RouterLinkUp v-if="!advancedSettings" />
		<h1 class="text-hulu">
			{{ $t("pageSpecificTitle", ["Hulu"]) }}
		</h1>
	</div>
	<div class="py-1 m-0 flex">
		<div class="tooltip flex">
			<p>{{ $t("skipIntroSwitch") }}</p>
			<template v-if="!advancedSettings">
				<i-mdi-help-circle height="1rem" />
				<div
					class="tooltip-content text-primary-content"
					style="transform: unset; inset: auto auto var(--tt-off) 0%"
				>
					{{ $t("skipIntroDescription") }}
				</div>
			</template>
		</div>
		<Switch
			v-model="settings.Hulu.skipIntro"
			class="ml-auto"
		></Switch>
	</div>
	<template v-if="advancedSettings">
		<p class="description">
			{{ $t("skipIntroDescription") }}
		</p>
		<hr />
	</template>
	<div class="py-1 m-0 flex">
		<div class="tooltip flex">
			<p>{{ $t("skipRecapSwitch") }}</p>
			<template v-if="!advancedSettings">
				<i-mdi-help-circle height="1rem" />
				<div
					class="tooltip-content text-primary-content"
					style="transform: unset; inset: auto auto var(--tt-off) 0%"
				>
					{{ $t("skipRecapDescription") }}
				</div>
			</template>
		</div>
		<Switch
			v-model="settings.Hulu.skipRecap"
			class="ml-auto"
		></Switch>
	</div>
	<template v-if="advancedSettings">
		<p class="description">
			{{ $t("skipRecapDescription") }}
		</p>
		<hr />
	</template>
</template>
<script setup lang="ts">
const optionsStore = useOptionsStore()
const { settings } = storeToRefs(optionsStore)
const props = defineProps({
	advancedSettings: {
		type: Boolean,
		default: false,
	},
})
</script>
