<template>
	<label class="switch">
		<input
			:checked="props.modelValue"
			type="checkbox"
			@input="emit('update:modelValue', $event.target.checked)"
		/>
		<span class="slider round"></span>
	</label>
</template>

<script setup lang="ts">
// components emits value
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 44px;
	height: 24px;
	flex-shrink: 0;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 18px;
	width: 18px;
	left: 3px;
	bottom: 3px;
	background-color: white;
}

input:checked + .slider {
	background-color: #00a205;
}

/* change color on hover */
input:checked + .slider:hover {
	background-color: #006303;
}

input:checked + .slider:before {
	-webkit-transform: translateX(20px);
	-ms-transform: translateX(20px);
	transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
