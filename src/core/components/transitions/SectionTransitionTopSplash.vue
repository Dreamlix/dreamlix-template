<template>
	<div class="container-transition-top">
		<div class="img-block">
			<img class="img-transition-top" src="/texture-top.png" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'SectionTransitionTopSplash'
});
</script>

<style scoped>
.container-transition-top {
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
}

.img-block {
	width: 60%;
	height: 100px;
	position: relative;
}

.img-transition-top {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>
