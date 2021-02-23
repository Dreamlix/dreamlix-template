<template>
	<v-app>
		<v-row>
			<v-col cols="10" class="offset-1">
				<div style="position:relative;">
					<app-bar logo="header-logo-white.png" :links="headerLinks"></app-bar>
				</div>
			</v-col>
		</v-row>
		<v-main>
			<section-landing title="Provided Page Title" background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</section-landing>
			<section-image-text
					title="Welcome"
					subtitle="SURF, REGGGAE, MOJITOS, LIVE MUSIC, COOL LIFESTYLE."
					image="/maktub-who-we-are.png"
					image-location="left"
			>
			</section-image-text>
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
					<v-col cols="8" class="offset-2">
						<v-row>
							<v-col cols="6" md="4">
								<card-info-minimal title="Title" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
							<v-col cols="6" md="4">
								<card-info-minimal title="Accommodation" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
							<v-col cols="12" md="4">
								<card-info-minimal title="Title" background-image="/card-accommodation.jpg" link=""> </card-info-minimal>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>
			<section-contact-map-text
					title="Provided Title"
					map-location="left"
					background-color="#FB9062"
					phone="+31 63 606 3595"
					socials="true"
			>
				<template v-slot:map>
					<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.035189733403!2d-17.236838684818323!3d32.76480078097577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc60527892750acb%3A0xaea65e8a0c010bc8!2sMaktub%20Pub!5e0!3m2!1sen!2suk!4v1614072653092!5m2!1sen!2suk"
							width="100%"
							height="450"
							style="border: none; border-radius: 20px;"
							allowfullscreen="false"
							loading="lazy">
					</iframe>
				</template>
			</section-contact-map-text>
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
import SectionContactMapText from '@/core/components/contact/SectionContactMapText.vue';
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
		SectionContactMapText,
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
