<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../../strores/weather'
import temporaryConverter from '../../utils/temporaryConverter'

const props = defineProps({
    config: Object
})

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

const description = computed(() => {
    const data = weather.value
    return data.weather? data.weather[0].description : ''
})

const temporary = computed(() => {
    const data = weather.value
    return data.main? `${temporaryConverter(data.main.temp).toFixed(0)}°C` : ''
})

// https://openweathermap.org/weather-conditions
const icon = computed(() => {
    const data = weather.value
    const url = 'http://openweathermap.org/img/wn/'
    return data.weather? `${url}${data.weather[0].icon}.png` : ''
})
</script>
<template>
    <div class="weather-task-button task-button">
        <div class="weather-icon-box">
            <img 
                v-if="icon"
                :src="icon" 
                alt="weather"
            >
        </div>
        <div>
            <div>
                {{ temporary }}
            </div>
            <div class="silver">
                {{ description }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.weather-task-button {
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 2px;
}

.weather-icon-box img {
    margin-top: 2.5px;
    height: 40px;
    object-fit: cover;
}
</style>