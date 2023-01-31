<script setup>
import { onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'

const props = defineProps({
    config: Object
})
</script>
<template>
    <DraggableContainer>
        <div 
            class="command-prompt-container"
            :style="config.style"
        >
            <header class="header">
                명령 프롬프트
            </header>
            <div class="editor-view">

            </div>
        </div>
    </DraggableContainer>
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