<template>
	<v-card flat color="transparent">
		<v-card-title class="pt-0">
			<div class="white mr-2 rounded-circle pa-1">
				<v-img
					class="shrink "
					contain
					src="https://images.squarespace-cdn.com/content/600fff8831539d708a565cc6/1611667752413-J16I28OW25P5CRTIA2OO/dreamcatcher.png?content-type=image%2Fpng"
					transition="scale-transition"
					width="40"
				/>
			</div>
			Dreamlix
		</v-card-title>
		<v-card-text>Made with <v-icon small color="red">mdi-heart</v-icon> in South Africa</v-card-text>
		<v-card-actions class="justify-space-between px-5">
			<v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
			<v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
			<v-btn icon><v-icon>mdi-twitter</v-icon></v-btn>
			<v-btn icon><v-icon>mdi-github</v-icon></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped></style>
