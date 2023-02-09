<script setup>
import { onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './strores/user'
import { useButtonStore } from './strores/button'
import { useWeatherStore } from './strores/weather'
import initData from './data/init-data.json'

const buttonStore = useButtonStore()
const { buttons } = storeToRefs(buttonStore)

initData.tasks.forEach(config => buttonStore.createButton(config))

const userStore = useUserStore()
const weatherStore = useWeatherStore()

userStore.getIp
weatherStore.setWeather()

onUnmounted(() => {
  
})
</script>
<template>
  <router-view></router-view>
</template>
<style scoped>
</style>
