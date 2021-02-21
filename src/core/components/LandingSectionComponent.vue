<template>
	<v-parallax src="https://i.imgur.com/bX2Uk7C.jpg" height="600" jumbotron>
		<h1>{{ title }}</h1>
		<section-transition-splash-bottom></section-transition-splash-bottom>
	</v-parallax>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionTransitionSplashBottom from './SectionTransitionSplashBottom.vue';

export default Vue.extend({
	components: { SectionTransitionSplashBottom },
	props: {
		/**
		 * A prop comment, normally prop names are desciptive and don't require comments
		 */
		title: {
			type: String,
			default: 'Example title'
		},
		subtitle: {
			type: String,
			default: 'Example subtitle'
		}
	}
});
</script>

<style>
h1 {
	text-align: center;
}
</style>
