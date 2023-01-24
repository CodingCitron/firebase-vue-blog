<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../../strores/weather'

const props = defineProps({
    config: Object
})

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

const description = computed(() => {
    const data = weather.value
    return data.weather? data.weather[0].description : '정보 없음'
})

</script>
<template>
    <div>
        {{ description }}
    </div>
</template>
<style scoped>

</style>