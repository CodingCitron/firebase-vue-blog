<script setup>
import Background from '../../components/Background.vue'
import BackgroundImg from '../../assets/imgs/backgrounds/windows11-bg-1.jpg'
import MainNavigation from './MainTaskbar.vue'
import WidgetControl from './MainTask.vue'
import Effect from '../../components/Effect.vue'
import MouseDragging from './services/MouseDragging'

import { useTaskStore } from '../../strores/task'

const taskStore = useTaskStore()
taskStore.$reset()

const defaultStyle = {
    height: 'calc(100vh - 45px)'
}

const dragging = new MouseDragging()
</script>
<template>
    <Background :path="BackgroundImg">
        <main class="view">
            <div class="control-view"
                :ref="target => dragging.setScope.call(dragging, target)"
                style="height: calc(100vh - 45px);"
            >
                <WidgetControl />
            </div>
            <MainNavigation 
                
            />
        </main>
    </Background>
</template>
<style scoped>
.view {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.control-view {
    position: absolute;
    width: 100%;
}
</style>