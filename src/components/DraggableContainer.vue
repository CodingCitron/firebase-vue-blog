<script setup>
import { onUnmounted } from 'vue'
import DraggableElement from './services/DraggableElement'

const props = defineProps({
    config: Object
})

const dragEl = new DraggableElement({})

onUnmounted(() => dragEl.unMounted())

function getImagePath(iconName) {
    console.log(new URL(`./${iconName}`, import.meta.url))
    return new URL(`/src/assets/imgs/icons/${iconName}`, import.meta.url).href
}
</script>
<template>
    <div 
        :class="config.className"
        :style="config.style"
    >
        <header 
            :class="config.header.className"
            :style="config.header.style"
        >   
            <div class="header-left">
                <img 
                    :src="getImagePath(config.header.iconName)"
                    alt="program-img"
                    class="header-icon" 
                />
                <span>{{ config.header.title }}</span>
            </div>
            <div class="header-right">
                
            </div>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.header-left {
    display: flex;
    align-items: center;
    gap: 6px;
}
</style>