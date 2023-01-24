<script setup>
import { useUserStore } from './strores/user'

const userStore = useUserStore()
userStore.getIp
</script>
<template>
  <router-view></router-view>
</template>
<style scoped>
</style>
