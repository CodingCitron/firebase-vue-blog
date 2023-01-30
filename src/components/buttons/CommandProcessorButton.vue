<script setup>
import commandIcon from '../../assets/imgs/icons/terminal-icon.png'

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