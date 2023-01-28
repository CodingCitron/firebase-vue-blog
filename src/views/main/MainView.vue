<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
import Background from '../../components/Background.vue'
import BackgroundImg from '../../assets/imgs/backgrounds/windows11-bg-1.jpg'
import MainNavigation from './MainTaskbar.vue'
import MainTask from './MainTask.vue'
import Effect from '../../components/Effect.vue'
import MouseDragging from './services/MouseDragging'
import config from '../../data/config.json'
import { useTaskStore } from '../../strores/task'

const taskStore = useTaskStore()
// taskStore.$reset()

const dragging = ref(new MouseDragging())

onUnmounted(() => taskStore.$reset())
</script>
<template>
    <Background :path="BackgroundImg">
        <main class="view">
            <div class="control-view"
                :ref="target => dragging.setScope.call(
                    dragging, 
                    target, 
                    dragging.activeEvent.bind(dragging)
                )"
                :style="config['main-navigation'].style"
            >
                <MainTask />
            </div>
            <MainNavigation />
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