<template>
	<ul class="mosaic">
		<li>
			<router-link v-bind:to="'/projects/' + projectProp.name">
				<figure class="fluid column setting-shadow--motion">
					<img
						class="image-responsive"
						loading="eager"
						v-bind:src="projectProp.mosaic.path1"
						v-bind:srcset="projectProp.mosaic.path2"
					/>
					<canvas class="overlay"></canvas>
					<div class="mosaic-title">
						<h3 class="align-center">{{ projectProp.title }}</h3>
						<h5 class="align-center">{{ projectProp.description }}</h5>
						<button
							class="button button-mini button-tag button-white--ghost"
							v-for="(tag, index) in projectProp.tags"
							v-bind:key="tag"
							v-if="index<2"
						>{{ tag }}</button>
					</div>
				</figure>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: ['projectProp']
}
</script>
