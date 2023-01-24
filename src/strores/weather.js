import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
    const weather = ref([])
    const base = ref(null)
    const cloud = ref({
        all: null
    })
    const wind = ref({
        speed: null,
        deg: null,
        gust: null,
    })
    const timezone = ref(null)
    const visibility = ref(null)
    const sys = ref({
        type: null,
        id: null,
        country: null,
        sunrise: null,
        sunset: null
    })
    const main = ref({
        feels_like: null,
        grnd_level: null,
        humidity: null,
        pressure: null,
        sea_level: null,
        temp: null,
        temp_max: null,
        temp_min: null,
    })
    const dt = ref(null)
    const id = ref(null)
    const cod = ref(null)

    function setWeather() {
        try {

        } catch(error) {
            console.log(error)
        }
    }

    return {
        weather
    }
})
