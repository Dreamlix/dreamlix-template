<template>
	<v-row>
		<v-col cols="12" md="4" lg="3" class="mx-auto">
			<v-card>
				<v-card-title>Dreamlix title</v-card-title>
				<v-card-text>Some example text showing stuff</v-card-text>
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
	methods: {
		clickMethod(): void {
			alert('Click example');
		}
	}
});
</script>
