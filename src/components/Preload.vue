<template>
	<div>
		<img
			v-for="project in data.projects"
			v-bind:key="project"
			class="display-none"
			loading="lazy"
			v-bind:src="project.hero"
		/>
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