import { defineStore } from 'pinia'
import { ref } from 'vue'
import initData from '../data/init-data.json'
import TaskbarButton from './services/TaskbarButton'

export const useTaskbarStore = defineStore('taskbar', () => {
    const taskbarButtons = ref([])

    initData['tasks'].forEach(
        button => taskbarButtons.value.push(new TaskbarButton(button))
    )

    return {
        taskbarButtons
    }
})