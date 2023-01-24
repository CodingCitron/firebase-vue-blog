import { defineStore, storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import getLocationInfo from '../api/getLocationInfo'
import getWeatherInfo from '../api/getWeathersInfo'
import { useUserStore } from './user'

export const useWeatherStore = defineStore('weather', () => {
    const location = ref({
        lat: null,
        lon: null
    })
    
    const weather = ref({})
    // const base = ref(null)
    // const cloud = ref({
    //     all: null
    // })
    // const wind = ref({
    //     speed: null,
    //     deg: null,
    //     gust: null,
    // })
    // const timezone = ref(null)
    // const visibility = ref(null)
    // const sys = ref({
    //     type: null,
    //     id: null,
    //     country: null,
    //     sunrise: null,
    //     sunset: null
    // })
    // const main = ref({
    //     feels_like: null,
    //     grnd_level: null,
    //     humidity: null,
    //     pressure: null,
    //     sea_level: null,
    //     temp: null,
    //     temp_max: null,
    //     temp_min: null,
    // })
    // const dt = ref(null)
    // const id = ref(null)
    // const cod = ref(null)

    const userStore = useUserStore()
    const { getIp } = storeToRefs(userStore)

    const getWeather = computed(() => weather.value)
    const getLocation = computed(() => {
        const { lat, lon } = location.value
        return (lat === null || lon === null)? setLocation() : location.value
    })

    async function setLocation () {
        try {
            const ip = await getIp.value
            const res = await getLocationInfo(ip)
            
            location.value.lat = res.data.latitude
            location.value.lon = res.data.longitude

            return location.value
        } catch(error) {
            console.log(error)
        }
    }

    async function setWeather() {
        try {
            const location = await getLocation.value

            const res = await getWeatherInfo({
                lat: location.lat,
                lon: location.lon
            })

            Object.keys(res.data).forEach(key => {
                weather.value[key] = res.data[key]
            })
        } catch(error) {
            console.log(error)
        }
    }

    return {
        weather,
        getLocation,
        setLocation,
        getWeather,
        setWeather,
    }
})
