<template>
	<div id="styleguide">
		<!-- hero -->
		<div id="styleguide-hero">
			<canvas class="overlay background-black"></canvas>
			<div class="hero-title align-center setting-anim--fadeinup setting-anim--delayed">
				<div class="container">
					<h1 class="align-center color-white">{{ data.styleguide.project.title }}</h1>
					<p class="align-center color-white">
						{{ data.styleguide.project.description }}
						<br />Its purpose is to help teams unite around a common language during the creation and life of a product.
					</p>
					<button
							class="button button-mini button-white--ghost button-tag"
							v-for="tag in data.styleguide.project.tags"
							v-bind:key="tag"
						>{{ tag }}</button>
				</div>
			</div>
		</div>
		<!-- /hero -->

		<div class="container">
			<div class="five-sixth-laptop five-sixth-desktop column">
				<styleguide-elements></styleguide-elements>
				<styleguide-componentsweb></styleguide-componentsweb>
				<!-- <styleguide-brand></styleguide-brand> -->
			</div>

			<div class="one-sixth-laptop one-sixth-desktop column display-laptop display-desktop">
				<styleguide-nav></styleguide-nav>
			</div>
		</div>

		<contact-app></contact-app>
	</div>
</template>

<script>
import Json from '../assets/data/data.json';
import StyleguideElements from '../components/StyleguideElements.vue';
import StyleguideComponentsweb from '../components/StyleguideComponentsweb.vue';
import StyleguideBrand from '../components/StyleguideBrand.vue';
import StyleguideNav from '../components/StyleguideNav.vue';
import Contact from '../components/Contact.vue';

export default {
	data() {
		return {
			data: Json
		}
	},
	components: {
		'styleguide-elements': StyleguideElements,
		'styleguide-componentsweb': StyleguideComponentsweb,
		'styleguide-brand': StyleguideBrand,
		'styleguide-nav': StyleguideNav,
		'contact-app': Contact
	}
}
</script>




