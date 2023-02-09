import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import DynamicButton from './services/DynamicButton'

export const useButtonStore = defineStore('button', () => {
    const buttons = ref([])
    const id = ref(0)

    function createButton (config) {
        config.id = id.value
        buttons.value.push(new DynamicButton(config.name, config))
        id.value++
    }

    function getButton(id) {
        return buttons.value.find(button => button.id === id)
    }

    return {
        buttons,
        createButton,
        getButton
    }
})