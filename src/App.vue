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
			<example-component>Some example card title text</example-component>
		</v-main>
		<footer-alpha />
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ExampleComponent from '@/core/components/ExampleComponent.vue';
import FooterAlpha from '@/core/templates/footers/FooterAlpha.vue';

export default Vue.extend({
	components: {
		ExampleComponent,
		FooterAlpha
	},

	data: () => ({
		//
	})
});
</script>
