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
			<landing-section-component title="Provided Page Title" background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-top>
					<component :is="transitionTop"></component>
				</template>
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</landing-section-component>
			<div style="height: 400px;"></div>
			<section-image background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-top>
					<component :is="transitionTop"></component>
				</template>
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</section-image>
			<div style="height: 400px;">
				<v-row>
					<v-col cols="2"> </v-col>
					<v-col cols="8">
						<v-row>
							<v-col cols="4">
								<card-info-minimal title="Title" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
							<v-col cols="4">
								<card-info-minimal title="Accommodation" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
							<v-col cols="4">
								<card-info-minimal title="Title" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import LandingSectionComponent from '@/core/components/LandingSectionComponent.vue';
import SectionImage from '@/core/components/SectionImage.vue';
import SectionTransitionBottomSplash from '@/core/components/transitions/SectionTransitionBottomSplash.vue';
import SectionTransitionTopSplash from '@/core/components/transitions/SectionTransitionTopSplash.vue';
import CardInfoMinimal from '@/core/components/cards/CardInfoMinimal.vue';

export default Vue.extend({
	components: {
		LandingSectionComponent,
		SectionTransitionTopSplash,
		SectionTransitionBottomSplash,
		SectionImage,
		CardInfoMinimal
	},

	data: () => ({
		transitionTop: 'SectionTransitionTopSplash',
		transitionBottom: 'SectionTransitionBottomSplash'
	})
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

html,
body {
	font-family: 'Amatic SC';
}

#app {
	font-family: 'Amatic SC';
}
</style>
