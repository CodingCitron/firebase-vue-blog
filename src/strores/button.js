import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useButtonStore = defineStore('button', () => {
    const buttons = ref([])
    
    return {
        buttons,
    }
})