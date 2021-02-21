<template>
	<v-app>
		<app-bar logo="header-logo-white.png"></app-bar>
		<v-main>
			<landing-section-component title="Provided Page Title" subtitle="Provided Page SubTitle"> This content is filled via a default slot </landing-section-component>`,
		</v-main>
		<!-- <footer-alpha></footer-alpha> -->
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingSectionComponent from '@/core/components/LandingSectionComponent.vue';
import AppBar from '@/core/components/AppBar.vue';

export default Vue.extend({
	components: {
		AppBar,
		LandingSectionComponent
		// FooterAlpha
	},

	data: () => ({
		//
	})
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

html,
body {
	font-family: 'Amatic SC', serif;
}
</style>
