<template>
	<footer>
		<div class="container-fluid align-center">
			<h5 class=" display-inline-block">2020 The Bowyer&nbsp;&nbsp;&nbsp;-</h5>
			&nbsp;
			<a class="link link-theme" href="https://www.linkedin.com/in/gaelbbou/en" target="_blank">
				<icon-linkedin class="icon icon-theme"></icon-linkedin>
			</a>
			&nbsp;
			<a class="link link-theme" href="https://dribbble.com/gaelbbou" target="_blank">
				<icon-dribbble class="icon icon-theme"></icon-dribbble>
			</a>
			&nbsp;
			<a class="link link-theme" href="https://github.com/gaelbbou" target="_blank">
				<icon-github class="icon icon-theme"></icon-github>
			</a>
		</div>
	</footer>
</template>

<script>
import IconLinkedin from '../assets/icons/IconLinkedin.vue';
import IconDribbble from '../assets/icons/IconDribbble.vue';
import IconGithub from '../assets/icons/IconGithub.vue';

export default {
	components: {
		'icon-linkedin': IconLinkedin,
		'icon-dribbble': IconDribbble,
		'icon-github': IconGithub
	}
}
</script>