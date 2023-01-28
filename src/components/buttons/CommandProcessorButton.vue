<script setup>
import commandIcon from '../../assets/imgs/icons/command-prompt-icon-19.jpg'

const props = defineProps({
    config: Object
})


</script>
<template>
    <button 
        class="task-button"
        @click="config.click()"
    >
        <img :src="commandIcon" alt="CMD">
    </button>
</template>
<style scoped>
.task-button img {
    height: 20px;
    object-fit: cover;
}
</style>