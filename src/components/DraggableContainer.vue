<script setup>
import { onUnmounted } from 'vue'
import DraggableElement from './services/DraggableElement'

const props = defineProps({
    config: Object
})

const dragEl = new DraggableElement({})

onUnmounted(() => dragEl.unMounted())

function getImagePath(iconName) {
    return new URL(`/src/assets/imgs/icons/${iconName}`, import.meta.url).href
}

const emit = defineEmits(['hide', 'transform', 'close'])

function hideHandler (e) {
    return emit('hide', e)
}

function transformHandler (e) {
    return emit('transform', e)
}

function closeHandler (e) {
    return emit('close', e)
}
</script>
<template>
    <div
        :class="config.className"
        :style="config.style"
        :ref="target => dragEl.init(target)"
    >
        <header 
            :class="config.header.className"
            :style="config.header.style"
            :ref="target => dragEl.setHeader(target)"
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
                <button 
                    @click="hideHandler"
                >
                    숨김
                </button>
                <button 
                    @click="transformHandler"
                >
                    최대화
                </button>
                <button 
                    @click="closeHandler"
                >
                    닫기
                </button>
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