import { defineStore } from 'pinia'
import { ref, toRaw, computed } from 'vue'

export const useButtonStore = defineStore('button', () => {
    const buttons = ref([])
    
    function getButton(instance) {
        return computed(() => 
            toRaw(buttons.value.find(button => toRaw(button) === instance))
        )
    }

    return {
        buttons,
        getButton
    }
})