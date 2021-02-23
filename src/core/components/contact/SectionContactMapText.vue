<template>
	<div class="pa-12" :style="{ 'background-color': backgroundColor }">
		<v-row>
			<v-col v-if="mapLocation === 'left'" cols="12" md="6">
				<slot name="map"></slot>
			</v-col>
			<v-col cols="12" md="6">
				<div class="container-title">
					<div>
						<h1>{{ title }}</h1>
						<h2>{{ subtitle }}</h2>
						<h4 v-if="phone">
							<v-icon
								small
								color="black"
							>
								mdi-phone
							</v-icon>
							{{ phone }}
						</h4>
						<socials-card v-if="socials"></socials-card>
					</div>
				</div>
			</v-col>
			<v-col v-if="mapLocation === 'right'" cols="12" md="6">
				<slot name="map"></slot>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialsCard from "@/core/components/SocialsCard.vue";

export default Vue.extend({
	components: {
		SocialsCard
	},
	props: {
		title: {
			type: String,
			default: 'Example title'
		},
		subtitle: {
			type: String,
			default: ''
		},
		phone: {
			type: String,
			default: ''
		},
		socials: {
			type: String,
			default: 'false'
		},
		image: {
			type: String,
			default: ''
		},
		mapLocation: {
			type: String,
			default: 'left'
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		}
	}
});
</script>

<style>
.container-title {
	height: 100%;
	display: -webkit-flexbox;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	justify-content: center;
}

h2,
h3,
h4 {
	text-align: center;
}
</style>
