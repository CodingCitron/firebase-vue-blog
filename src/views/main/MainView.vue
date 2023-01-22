<script setup>
import Background from '../../components/Background.vue'
import BackgroundImg from '../../assets/imgs/genshin-wallpaper.jpg'
import MainNavigation from './MainNavigation.vue'
import WidgetControl from './WidgetControl.vue'

import { useWidgetStore } from '../../strores/widget'

const widgetStore = useWidgetStore()
widgetStore.$reset()

</script>
<template>
    <Background :path="BackgroundImg">
        <div>
            <WidgetControl />
            <MainNavigation />
        </div>
    </Background>
</template>
<style scoped>

</style>