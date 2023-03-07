<script setup>
import postIcon from '@/assets/imgs/icons/icons8-blog-64.png'

const props = defineProps({
    config: Object
})
</script>
<template>
    <button
        class="task-button"
        @click="config.click()"
    >
        <img :src="postIcon" alt="Post Icon">
    </button>
</template>
<style scoped>

</style>