<script setup>
import { onUnmounted } from 'vue'
import DraggableElement from './services/DraggableElement'

const props = defineProps({
    config: Object
})

const dragEl = new DraggableElement({})

onUnmounted(() => dragEl.unMounted())
</script>
<template>
    <div>
        <header></header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
</style>