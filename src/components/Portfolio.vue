<template>
	<div id="portfolio" class="portfolio section section-first section-last">
		<div class="container">
			<h2 class="align-center">Portfolio</h2>
			<p class="align-center">
				A preview of the different projects I have worked on.
				<br />You can also download my
				<a
					v-bind:href="data.website.pdfPortfolio"
					class="link link-external"
					target="_blank"
				>portfolio in PDF</a>.
			</p>
			<br />
			<div class="row">
				<mosaic-app v-for="project in data.projects" v-bind:key="project" v-bind:projectProp="project"></mosaic-app>
			</div>
			<br />
			<div class="subsection">
				<h3 class="align-center">Style Guide</h3>
				<p class="align-center">
					You can consult the
					<router-link to="/styleguide" class="link link-primary">Style Guide</router-link>&nbsp;of this website.
				</p>
				<br />
				<div class="row">
					<div class="mosaic">
						<router-link to="/styleguide">
							<figure class="fluid column setting-shadow--motion align-center float-none">
								<img
									class="image-responsive"
									loading="lazy"
									v-bind:src="data.styleguide.project.mosaic.path1"
									v-bind:srcset="data.styleguide.project.mosaic.path2"
									width="800"
									height="533"
								/>
								<canvas class="overlay"></canvas>
								<div class="mosaic-title">
									<h3 class="align-center">{{ data.styleguide.project.title }}</h3>
									<h5 class="align-center">{{ data.styleguide.project.description }}</h5>
									<button
										class="button button-mini button-tag button-white--ghost"
										v-for="(tag, index) in data.styleguide.project.tags"
										v-bind:key="tag"
										v-if="index<2"
									>{{ tag }}</button>
								</div>
							</figure>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Json from '../assets/data/data.json';
import Mosaic from '../components/Mosaic.vue';

export default {
	data() {
		return {
			data: Json,
		}
	},
	components: {
		'mosaic-app': Mosaic
	}
}
</script>