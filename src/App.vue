<template>
	<v-app>
		<app-bar logo="header-logo-white.png" :links="headerLinks"></app-bar>
		<v-main>
			<section-landing title="Provided Page Title" background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</section-landing>
			<section-image-text title="Provided Title" subtitle="Provided subtitle" image="https://i.imgur.com/bX2Uk7C.jpg" image-location="left"> </section-image-text>
			<section-image background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-top>
					<component :is="transitionTop"></component>
				</template>
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</section-image>
			<section-image-text title="Provided Title" subtitle="Provided subtitle" image="https://i.imgur.com/bX2Uk7C.jpg" image-location="right"> </section-image-text>
			<div style="position:relative;">
				<div style="position: absolute; bottom: 0; left: 0; width: 100%;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
						<path
							fill="#FB9062"
							fill-opacity="1"
							d="M0,128L80,133.3C160,139,320,149,480,133.3C640,117,800,75,960,80C1120,85,1280,139,1360,165.3L1440,192L1440,500L1360,500C1280,500,1120,500,960,500C800,500,640,500,480,500C500,500,160,500,80,500L0,500Z"
						></path>
					</svg>
				</div>
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
			<section-image-text title="Provided Title" subtitle="Provided subtitle" image="https://i.imgur.com/bX2Uk7C.jpg" image-location="left" background-color="#FB9062">
			</section-image-text>
			<div style="position: relative; height: 100px; min-height: 50px; background-color: #FB9062">
				<svg style="position:absolute; left: 0; bottom: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
					<path
						fill="#454F51"
						fill-opacity="1"
						d="M0,128L80,133.3C160,139,320,149,480,133.3C640,117,800,75,960,80C1120,85,1280,139,1360,165.3L1440,192L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C200,200,160,200,80,200L0,200Z"
					></path>
				</svg>
			</div>
			<footer-simple logo="header-logo-white.png"></footer-simple>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionLanding from '@/core/components/SectionLanding.vue';
import SectionImage from '@/core/components/SectionImage.vue';
import SectionImageText from '@/core/components/SectionImageText.vue';
import SectionTransitionBottomSplash from '@/core/components/transitions/SectionTransitionBottomSplash.vue';
import SectionTransitionTopSplash from '@/core/components/transitions/SectionTransitionTopSplash.vue';
import CardInfoMinimal from '@/core/components/cards/CardInfoMinimal.vue';
import FooterSimple from '@/core/templates/footers/FooterSimple.vue';
import AppBar from '@/core/components/AppBar.vue';
import Link from '@/core/models/link';

export default Vue.extend({
	components: {
		AppBar,
		SectionLanding,
		SectionTransitionTopSplash,
		SectionTransitionBottomSplash,
		SectionImage,
		SectionImageText,
		CardInfoMinimal,
		FooterSimple
	},
	data: () => ({
		headerLinks: [new Link('#', 'Store'), new Link('#', 'Accommodation'), new Link('#', 'Events'), new Link('#', 'Contact')],
		transitionTop: 'SectionTransitionTopSplash',
		transitionBottom: 'SectionTransitionBottomSplash'
	})
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

html,
body {
	font-family: 'Amatic SC', serif;
}

#app {
	font-family: 'Amatic SC', serif;
}
</style>
