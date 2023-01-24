import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import requestGetIp from '../api/getIp'
import getLocationInfo from '../api/getLocationInfo'

export const useUserStore = defineStore('user', () => {
    const users = ref([])
    const user = ref({
        email: null,
        ip: null,
    })
    
    const getIp = computed(() => {
        return user.value.ip? user.value.ip : setIp()
    })

    async function setIp() {
        try {
            const res = await requestGetIp()
            user.value.ip = res.data.ip

            return user.value.ip
        } catch (error) {
            console.log(error)
        }
    }

    return {
        users,
        user,
        getIp,
    }
})