<script setup lang="ts">
import { streamingServices } from "@/constants/streamingServices"

const optionsStore = useOptionsStore()
const { settings } = storeToRefs(optionsStore)

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
const SliderPreview = ref(10)
const isMobile = /mobile|streamingEnhanced/i.test(navigator.userAgent)

const hideTitlesStore = useHideTitlesStore()
const { hideTitles } = storeToRefs(hideTitlesStore)
function removeTitle(title: string) {
	delete hideTitles.value[title]
}
function removeAllTitles() {
	hideTitles.value = {}
}
</script>
<template>
	<h1>{{ $t("sharedPageTitle") }}</h1>
	<p class="description">{{ $t("sharedPageDescription") }}</p>
	<div :class="isMobile ? '' : 'hidden'">
		<hr />
		<div class="line flex">
			<p>{{ $t("userAgentSwitch") }}</p>
			<Switch
				v-model="settings.Video.userAgent"
				class="ml-auto"
			></Switch>
		</div>
		<p class="description">{{ $t("userAgentDescription") }}</p>
	</div>
	<OptionsPageSettingsTable></OptionsPageSettingsTable>
	<OptionalPermission />
	<hr />
	<div>
		<div class="line flex">
			<p>{{ $t("dimLowRatingsSwitch") }}</p>
			<Switch
				v-model="settings.Video.dimLowRatings"
				class="ml-auto"
			></Switch>
		</div>
		<p class="description">
			{{ $t("dimLowRatingsDescription") }}
		</p>
		<hr />
		<p>{{ $t("editRatings") }}</p>
		<table class="ratingTable">
			<thead>
				<tr>
					<th>{{ $t("pickColor") }}</th>
					<th>{{ $t("pickRating") }}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(threshold, index) in settings.General.RatingThresholds"
					:key="index"
				>
					<td>
						<div class="dropdown">
							<div
								class="swatch"
								:style="{ backgroundColor: threshold.color }"
								tabindex="0"
								role="button"
							></div>
							<div
								tabindex="0"
								class="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10"
							>
								<ColorPicker v-model="threshold.color" />
							</div>
						</div>
					</td>
					<td>
						<div class="flex items-center gap-2">
							<span class="text-base opacity-60">≦</span>
							<input
								v-model="threshold.value"
								type="number"
								class="input input-sm w-24 border-inherit"
								:disabled="threshold.value === 10"
							/>
						</div>
					</td>
					<td>
						<button
							class="btn btn-ghost btn-sm text-error"
							@click="settings.General.RatingThresholds[index] = defaultSettings.General.RatingThresholds[index]"
						>
							{{ $t("reset") }}
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<hr />
	<div class="line flex">
		<p>{{ $t("playOnFullScreenSwitch") }}</p>
		<Switch
			v-model="settings.Video.playOnFullScreen"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("playOnFullScreenDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("doubleClickSwitch") }}</p>
		<Switch
			v-model="settings.Video.doubleClick"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("doubleClickDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("pipSwitch") }}</p>
		<Switch
			v-model="settings.Video.pip"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("pipDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("scrollVolumeSwitch") }}</p>
		<Switch
			v-model="settings.Video.scrollVolume"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("scrollVolumeDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("showYearSwitch") }}</p>
		<Switch
			v-model="settings.Video.showYear"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("showYearDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("epilepsySwitch") }}</p>
		<Switch
			v-model="settings.Video.epilepsy"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("epilepsyDescription") }}
	</p>
	<hr />
	<div class="line flex">
		<p>{{ $t("speedSliderSwitch") }}</p>
		<Switch
			v-model="speedSlider"
			class="ml-auto"
		></Switch>
	</div>
	<p class="description">
		{{ $t("speedSliderDescription") }}
	</p>
	<p>{{ $t("sliderOptions") }}</p>
	<table class="sliderTable">
		<tbody>
			<tr>
				<td>
					<p>{{ $t("sliderStepSize") }}</p>
				</td>
				<td>
					<input
						v-model="settings.General.sliderSteps"
						type="number"
						class="input input-sm w-24 border-inherit"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<p>{{ $t("sliderMin") }}</p>
				</td>
				<td>
					<input
						v-model="settings.General.sliderMin"
						type="number"
						class="input input-sm w-24 border-inherit"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<p>{{ $t("sliderMax") }}</p>
				</td>
				<td>
					<input
						v-model="settings.General.sliderMax"
						type="number"
						class="input input-sm w-24 border-inherit"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<p>{{ $t("sliderPreview") }}</p>
				</td>
				<td>
					<div class="flex items-center gap-3">
						<input
							v-model="SliderPreview"
							type="range"
							:min="settings.General.sliderMin"
							:max="settings.General.sliderMax"
							value="1.0"
							:step="settings.General.sliderSteps"
							class="range range-sm w-52"
						/>
						<p class="text-base opacity-80">{{ SliderPreview / 10 + "x" }}</p>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
	<hr />
	<p>{{ $t("hiddenTitles") }}</p>
	<button
		class="btn btn-sm btn-error mb-2"
		@click="removeAllTitles"
	>
		{{ $t("removeAllHiddenTitles") }}
	</button>
	<div class="grid-container">
		<div
			v-for="(title, index) in Object.keys(hideTitles)"
			:key="index"
			class="grid-item"
		>
			{{ title }}
			<i-mdi-delete
				class="text-error cursor-pointer min-w-6"
				@click="removeTitle(title)"
			/>
		</div>
	</div>
	<!-- <div style="margin-top: 5%"></div> -->
</template>
<style scoped>
@reference "@/assets/base.css";
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 10px;
	max-height: 24rem; /* Adjust height as needed */
	overflow-y: auto;
}
.grid-item {
	@apply flex justify-between items-center text-sm py-1.5 px-2.5 rounded-lg border border-base-content/20;
}
.ratingTable th {
	@apply text-xs font-semibold uppercase tracking-wide opacity-60 text-left pb-1 pr-4;
}
.ratingTable td {
	@apply py-1 pr-4;
}
.swatch {
	@apply w-8 h-8 rounded-lg ring-1 ring-base-content/25 cursor-pointer;
}
.sliderTable td {
	@apply py-1 pr-4;
}
</style>
