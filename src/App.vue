<script setup>
import { useUserStore } from './strores/user'
import { useWeatherStore } from './strores/weather'

const userStore = useUserStore()
const weatherStore = useWeatherStore()

userStore.getIp
weatherStore.setWeather()
</script>
<template>
  <router-view></router-view>
</template>
<style scoped>
</style>
