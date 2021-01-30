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
			<!-- <HelloWorld /> -->
			<example-component />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

export default Vue.extend({
	name: 'App',

	components: {
		ExampleComponent
	},

	data: () => ({
		//
	})
});
</script>
