<template>
	<v-row>
		<v-col cols="12" md="4" lg="3" class="mx-auto">
			<v-card>
				<v-card-title>{{ title }}</v-card-title>
				<v-card-text>
					<!-- @slot Example slot description -->
					<slot />
				</v-card-text>
				<v-card-actions class="d-flex justify-end">
					<v-btn icon @click="clickMethod">
						<v-icon>mdi-thumb-up</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		/**
		 * A prop comment, normally prop names are desciptive and don't require comments
		 */
		title: {
			type: String,
			default: 'Example title'
		}
	},
	methods: {
		clickMethod(): void {
			/**
			 * Example comment for event. See comment for prop as to why this might seem over the top.
			 */
			this.$emit('click');
		}
	}
});
</script>
