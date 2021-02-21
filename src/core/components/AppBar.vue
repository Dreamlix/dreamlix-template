<template>
	<v-app-bar absolute color="transparent" dark hide-on-scroll prominent elevation="0">
		<div v-if="logo">
			<v-img contain :src="require(`@/assets/image/${logo}`)" width="100" />
		</div>
		<v-spacer></v-spacer>

		<div v-for="link in links" :key="link.name + link.link" class="pt-2 pr-2" style="float: left;">
			<a class="grey--text text--lighten-3" :href="link.link">{{ link.name }}</a>
		</div>
	</v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';
import Link from '@/core/models/link';

export default Vue.extend({
	components: {},
	props: {
		logo: {
			type: String,
			default: 'https://picsum.photos/200'
		},
		links: {
			type: Array,
			default: (): Array<Link> => [new Link('/', 'About Us'), new Link('/', 'Contact')] as Array<Link>
		}
	}
});
</script>

<style scoped>
a:link {
	text-decoration: none;
}
a:hover {
	text-decoration: underline;
}
</style>
