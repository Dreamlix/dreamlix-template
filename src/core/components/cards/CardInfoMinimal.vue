<template>
	<v-hover>
		<template v-slot:default="{ hover }">
			<v-card class="mx-auto rounded-card">
				<v-card-text>
					<h1 class="card-title">
						{{ title }}
					</h1>
					{{ description }}
				</v-card-text>

				<v-fade-transition>
					<v-overlay v-if="hover" absolute color="#454F51">
						<a target="_blank" :href="link"><v-btn class="primary">See more info</v-btn></a>
					</v-overlay>
				</v-fade-transition>
				<v-img :src="backgroundImage"></v-img>
			</v-card>
		</template>
	</v-hover>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {},
	props: {
		title: {
			type: String,
			default: 'Card Title'
		},
		description: {
			type: String,
			default: ''
		},
		backgroundImage: {
			type: String,
			default: ''
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		link: {
			type: String,
			default: ''
		}
	}
});
</script>

<style>
.card-title {
	color: #454f51;
	padding: 20px 0;
	font-weight: bold;
}

.rounded-card {
	border-radius: 10px !important;
}

a {
	text-decoration: none;
}
</style>
