<template>
	<v-footer padless color="#454F51" dark class="pa-4">
		<div style="width: 100%">
			<v-row>
				<v-col cols="12" class="text-center justify-center pa-0 ma-0">
					<v-img contain :src="require(`@/assets/image/${logo}`)" width="200" style="display: inline-block" />
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="text-center justify-center pa-5 ma-0">
					<h4>
						Copyright © {{ new Date().getFullYear() }} Maktub <br />
						All rights reserved
					</h4>
				</v-col>
			</v-row>
		</div>
	</v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	components: {},
	props: {
		logo: {
			type: String,
			default: ''
		}
	}
});
</script>
