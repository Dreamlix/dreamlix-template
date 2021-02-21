<template>
	<v-parallax :src="backgroundImage" :style="{ 'background-color': backgroundColor }" :height="height">
		<slot name="transition-top"></slot>
		<slot name="transition-bottom"></slot>
	</v-parallax>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {},
	props: {
		backgroundImage: {
			type: String,
			default: ''
		},
		backgroundColor: {
			type: String,
			default: '#FFFFFF'
		},
		height: {
			type: String,
			default: '400'
		}
	}
});
</script>
