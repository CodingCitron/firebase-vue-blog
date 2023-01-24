<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../../strores/user'
import getLocationInfo from '../../api/getLocationInfo'
import getWeatherInfo from '../../api/getWeathersInfo'

const userStore = useUserStore()
const { getIp } = storeToRefs(userStore)

async function getLocation() {
    try {
        const ip = await getIp.value
        const res = await getLocationInfo(ip)
        const weatherInfo = await getWeatherInfo({
            lat: res.data.latitude,
            lon: res.data.longitude
        })

        console.log(weatherInfo)
    } catch (error) {

    }
}

getLocation()
</script>
<template>
    <div>
        {{  getIp  }}
    </div>
</template>
<style scoped>

</style>