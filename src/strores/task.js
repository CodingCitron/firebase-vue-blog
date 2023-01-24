import { defineStore } from 'pinia'
import { ref } from 'vue'
import initData from '../data/init-data.json'
import Button from './services/TaskbarButton'

export const useTaskStore = defineStore('task', () => {
    const task = ref([])
    const taskbarButtons = ref([])

    function registerButtons() {

    }

    initData.tasks.forEach(data => taskbarButtons.value.push(new Button(data)))

    return {
        task,
        taskbarButtons,
        registerButtons
    }
})