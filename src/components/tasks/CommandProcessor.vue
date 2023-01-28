<script setup>
import { onUnmounted } from 'vue'
import DraggableElement from '../services/DraggableElement'

const props = defineProps({
    config: Object
})

const dragEl = new DraggableElement({})

onUnmounted(() => dragEl.unMounted())
</script>
<template>
    <div 
        class="command-prompt-container"
        :style="config.style"
        :ref="target => dragEl.init.call(dragEl, target)"
    >
        <header class="header">
            명령 프롬프트
        </header>
        <div class="editor-view">

        </div>
    </div>
</template>
<style scoped>
.command-prompt-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #000;
}

.header {
    background-color: #fff;
}

.editor-view {
    flex: 1;
}
</style>