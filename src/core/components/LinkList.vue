<template>
	<div>
		<div v-if="title" class="text-uppercase">
			<strong>{{ title }}</strong>
		</div>
		<div v-for="link in links" :key="link.name + link.link" class="pt-2">
			<a class="grey--text text--lighten-3" :href="link.link">{{ link.name }}</a>
			<v-chip v-if="link.label" class="ml-2 black--text" x-small label color="yellow darken-2">{{ link.label }}</v-chip>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Link from '@/core/models/link';

export default Vue.extend({
	props: {
		title: {
			type: String,
			default: ''
		},
		links: {
			type: Array,
			default: (): Array<Link> => [] as Array<Link>
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
