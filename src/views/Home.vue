<template>
	<div id="home">
		<!-- preload -->
		<img class="display-none" loading="eager" v-bind:src="data.website.imgEarth" />

		<!-- hero -->
		<div id="home-hero" v-bind:style="{ backgroundImage: 'url(' + data.website.imgEarth + ')' }">
			<canvas id="spiders" class="overlay background-black"></canvas>
			<div class="hero-title align-center setting-anim--fadeinup setting-anim--delayed">
				<div class="container">
					<h1 class="align-center color-white">{{ data.website.title }}</h1>
					<p class="align-center color-white" style="max-width: 100%">
						{{ data.website.about.description1.eng }}
						<br />
						<span class="iphone5-hide">{{ data.website.about.description3.eng }}</span>
					</p>
				</div>
			</div>
			<button
				class="button button-white--ghost button-special setting-anim--fadeinup setting-anim--delayed align-center hero-arrowdown"
				v-on:click="smoothscrollPortfolio"
			>
				<icon-arrowdown class="icon"></icon-arrowdown>
			</button>
		</div>
		<!-- /hero -->

		<portfolio-app></portfolio-app>
		<preload-app></preload-app>
		<home-experience></home-experience>
		<home-contact></home-contact>
	</div>
</template>

<script>
import Json from '../assets/data/data.json';
import IconArrowdown from '../assets/icons/IconArrowdown.vue';
import Portfolio from '../components/Portfolio.vue';
import Preload from '../components/Preload.vue';
import HomeExperience from '../components/HomeExperience.vue';
import HomeContact from '../components/HomeContact.vue';

export default {
	data() {
		return {
			data: Json
		}
	},
	components: {
		'portfolio-app': Portfolio,
		'preload-app': Preload,
		'home-experience': HomeExperience,
		'home-contact': HomeContact,
		'icon-arrowdown': IconArrowdown
	},
	methods: {
		// isMobile function to determine if the device is mobile
		isMobile() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i.test(navigator.userAgent);
		},
		// if isMobile return true, hide #spiders
		if (isMobile) {
			document.querySelector('#spiders').style.display = "none";
		},
		smoothscrollPortfolio() {
			document.querySelector('#portfolio').scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
}
</script>
