<template>
	<div>
		<img
			v-for="project in data.projects"
			v-bind:key="project"
			loading="lazy"
			width="1"
			height="1"
			border="0"
			v-bind:src="project.hero"
		/>
		<!-- <img
			v-for="project in data.projects"
			v-bind:key="project"
			loading="lazy"
			width="1"
			height="1"
			border="0"
			v-bind:src="project.hero"
		/> -->
	</div>
</template>

<script>
import Json from '../assets/data/data.json';

export default {
	data() {
		return {
			data: Json
		}
	}
}
</script>