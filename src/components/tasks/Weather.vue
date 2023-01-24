<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../../strores/weather'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)



</script>
<template>
    <div>
        
    </div>
</template>
<style scoped>

</style>