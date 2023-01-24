import { defineStore } from 'pinia'
import { ref } from 'vue'
import initData from '../data/init-data.json'
import Button from './services/TaskbarButton'

export const useTaskStore = defineStore('task', () => {
    const task = ref([])
    const taskbars = ref([])

    initData.taskbars.forEach(button => taskbars.value.push(new Button(button)))

    return {
        task,
        taskbars
    }
})