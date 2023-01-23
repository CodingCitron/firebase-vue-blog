<script setup>
import Background from '../../components/Background.vue'
import BackgroundImg from '../../assets/imgs/genshin_21_4K.jpg'
import MainNavigation from './MainNavigation.vue'
import WidgetControl from './WidgetControl.vue'

import { useWidgetStore } from '../../strores/widget'

const widgetStore = useWidgetStore()
widgetStore.$reset()

const defaultStyle = {
    height: 'calc(100vh - 45px)'
}
</script>
<template>
    <Background :path="BackgroundImg">
        <main class="view">
            <div class="control-view"
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