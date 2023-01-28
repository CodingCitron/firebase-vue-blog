<script setup>
import { onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './strores/user'
import { useButtonStore } from './strores/button'
import { useWeatherStore } from './strores/weather'
import initData from './data/init-data.json'
import DynamicButton from './strores/services/DynamicButton'

const buttonStore = useButtonStore()
const { buttons } = storeToRefs(buttonStore)

initData.tasks.forEach(config => {
  buttons.value.push(new DynamicButton(config.name, config))
})

const userStore = useUserStore()
const weatherStore = useWeatherStore()

userStore.getIp
weatherStore.setWeather()

// let intervalId = setInterval(weatherStore.setWeather, )

onUnmounted(() => {
  
})
</script>
<template>
  <router-view></router-view>
</template>
<style scoped>
</style>
