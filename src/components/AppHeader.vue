<script setup lang="ts">
function openSettings() {
	browser.tabs.create({
		active: true,
		url: browser.runtime.getURL("src/ui/options-page/index.html#"),
	})
}
</script>

<template>
	<div class="navbar text-primary-content justify-between">
		<div class="flex">
			<RouterLink
				to="/"
				class="flex gap-2 items-center"
			>
				<img
					src="@assets/logo.png"
					alt="logo"
					class="h-12 w-auto"
				/>
				<h2 class="text-wrap w-24 p-0">{{ $t("pageTitle") }}</h2>
			</RouterLink>
		</div>
		<div class="flex h-full items-center">
			<a
				class="flex gap-2 items-center cursor-pointer"
				@click="openSettings"
			>
				<i-mdi-cog
					height="2.5rem"
					width="2.5rem"
					class="ml-1.5"
				/>
			</a>
			<ul class="menu menu-xs p-0">
				<li>
					<LocaleSwitch />
				</li>
				<li class="flex flex-row">
					<ThemeSwitch />
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
p {
	font-size: initial;
}
</style>
