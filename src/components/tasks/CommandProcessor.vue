<script setup>
import { onUnmounted } from 'vue'
import DraggableContainer from '../DraggableContainer.vue'
import Container from '../services/Container'

const props = defineProps({
    config: Object
})

console.log(props.config)
</script>
<template>
    <DraggableContainer :config="{
        header: {
            style: {
                display: 'flex',
                alignItems: 'center',
                height: '30px',
                fontSize: '12px',
                padding: '0 8px'
            },
            className: 'header',
            title: '명령 프롬프트',
            iconName: 'terminal-icon.png'
        },
        style: {
            ...config.style,
            borderRadius: '4px',
            overflow: 'hidden',
        },
        className: 'command-prompt-container',
    }">
        <div class="editor-view">

        </div>
    </DraggableContainer>
</template>
