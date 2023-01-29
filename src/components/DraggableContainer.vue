<script setup>
import DraggableElement from '../services/DraggableElement'

const dragEl = new DraggableElement({})
onUnmounted(() => dragEl.unMounted())
</script>
<template>

</template>
<style scoped>
</style>