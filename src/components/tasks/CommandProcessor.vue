<script setup>
import { onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'

const props = defineProps({
    config: Object
})
</script>
<template>
    <DraggableContainer 
        :config="config.getWrapConfig()"
        @close="e => config.close.call(config, e)"
    >
        <div class="editor-view">
            Sangmin's Blog
        </div>
    </DraggableContainer>
</template>
