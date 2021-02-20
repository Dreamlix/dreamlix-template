<template>
	<v-app>
		<v-app-bar app color="grey lighten-3">
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://images.squarespace-cdn.com/content/600fff8831539d708a565cc6/1611667752413-J16I28OW25P5CRTIA2OO/dreamcatcher.png?content-type=image%2Fpng"
					transition="scale-transition"
					width="40"
				/>
			</div>
		</v-app-bar>

		<v-main>
			<landing-section-component
					title="Provided Page Title"
					subtitle="Provided Page SubTitle"
			>
				This content is filled via a default slot
			</landing-section-component>`,
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingSectionComponent from '@/core/components/LandingSectionComponent.vue';
import FooterAlpha from '@/core/templates/footers/FooterAlpha.vue';

export default Vue.extend({
	components: {
		LandingSectionComponent,
		// FooterAlpha
	},

	data: () => ({
		//
	})
});
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

	html, body {
		font-family: 'Amatic SC';
	}

	#app {
		font-family: 'Amatic SC';
	}
</style>
