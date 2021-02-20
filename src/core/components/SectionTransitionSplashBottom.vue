<template>
    <div class="container-bottom-transition">
        <div class="image-block">
            <img class="bottom-transition" src="/texture-bottom.png">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "SectionTransitionSplashBottom"
    });
</script>

<style scoped>
    .container-bottom-transition {
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .image-block {
        width: 60%;
        height: 100px;
        position: relative;
    }

    .bottom-transition {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>