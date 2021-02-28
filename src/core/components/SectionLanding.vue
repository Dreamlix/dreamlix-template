<template>
	<v-parallax :src="require(`@/assets/image/${backgroundImage}`)" :style="{ 'background-color': backgroundColor }" height="600">
		<slot name="transition-top"></slot>
		<h1>{{ title }}</h1>
		<h3>{{ subtitle }}</h3>
		<slot name="transition-bottom"></slot>
	</v-parallax>
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
		backgroundImage: {
			type: String,
			default: ''
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		}
	}
});
</script>

<style>
h1,
h3 {
	text-align: center;
}
</style>
