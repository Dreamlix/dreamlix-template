<template>
	<v-app>
		<app-bar logo="header-logo-white.png" :links="headerLinks"></app-bar>
		<v-main>
			<section-landing title="Provided Page Title" background-image="https://i.imgur.com/bX2Uk7C.jpg">
				<template v-slot:transition-bottom>
					<component :is="transitionBottom"></component>
				</template>
			</section-landing>
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
import SectionLanding from '@/core/components/SectionLanding.vue';
import SectionImage from '@/core/components/SectionImage.vue';
import SectionTransitionBottomSplash from '@/core/components/transitions/SectionTransitionBottomSplash.vue';
import SectionTransitionTopSplash from '@/core/components/transitions/SectionTransitionTopSplash.vue';
import CardInfoMinimal from '@/core/components/cards/CardInfoMinimal.vue';
import AppBar from '@/core/components/AppBar.vue';
import Link from '@/core/models/link';

export default Vue.extend({
	components: {
		AppBar,
		SectionLanding,
		SectionTransitionTopSplash,
		SectionTransitionBottomSplash,
		SectionImage,
		CardInfoMinimal
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
