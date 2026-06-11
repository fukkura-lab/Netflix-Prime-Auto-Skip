<script lang="ts" setup>
const optionalPermissions: string[] = ["tabs"]
const unsetPermissions: Ref<string[]> = ref([])
checkOptionalPermissions()
async function checkOptionalPermissions() {
	for (const permission of optionalPermissions) {
		const result = await browser.permissions.contains({ permissions: [permission] })
		if (!result) unsetPermissions.value.push(permission)
	}
}

async function requestUnsetPermissions() {
	unsetPermissions.value.forEach(async (permission) => {
		const result = await browser.permissions.request({ permissions: [permission] })
		if (result) unsetPermissions.value = unsetPermissions.value.filter((p) => p !== permission)
	})
}
</script>
<template>
	<div
		v-if="unsetPermissions.length > 0"
		class="rounded-xl border border-warning/40 bg-warning/10 p-4 my-3 flex flex-col gap-3 w-fit"
	>
		<h2 class="text-lg font-semibold m-0 flex items-center gap-2">
			<i-mdi-alert-circle-outline class="w-5 h-5 text-warning shrink-0" />
			{{ $t("missingPermission") }}
		</h2>
		<div
			v-for="permission in unsetPermissions"
			:key="permission"
			class="flex items-center gap-2 text-sm"
		>
			<code class="badge badge-neutral badge-sm font-mono">{{ permission }}</code>
			<span class="opacity-70">{{ $t(permission + "Permission") }}</span>
		</div>
		<button
			class="btn btn-warning btn-sm w-fit"
			@click="requestUnsetPermissions"
		>
			{{ $t("addPermissionButton") }}
		</button>
	</div>
</template>
