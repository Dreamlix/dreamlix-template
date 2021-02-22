<template>
	<div class="pa-12" :style="{ 'background-color': backgroundColor }">
		<v-row>
			<v-col v-if="imageLocation === 'left'" md="6">
				<v-img :src="image"></v-img>
			</v-col>
			<v-col md="6">
				<div class="container-title">
					<div>
						<h1>{{ title }}</h1>
						<h2>{{ subtitle }}</h2>
					</div>
				</div>
			</v-col>
			<v-col v-if="imageLocation === 'right'" md="6">
				<v-img :src="image"></v-img>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {},
	props: {
		title: {
			type: String,
			default: 'Example title'
		},
		subtitle: {
			type: String,
			default: ''
		},
		image: {
			type: String,
			default: ''
		},
		imageLocation: {
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
h3 {
	text-align: center;
}
</style>
