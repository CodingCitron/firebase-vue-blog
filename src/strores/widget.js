import { defineStore } from 'pinia'
import { ref } from 'vue'
import defaultData from './data/default.json'
import Widget from './services/widget'

export const useWidgetStore = defineStore('widget', () => {
    const widgets = ref([])

    defaultData.widget.forEach(widget => widgets.value.push(new Widget(widget)))

    return {
        widgets
    }
})