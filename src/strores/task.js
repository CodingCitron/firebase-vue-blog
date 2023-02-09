import { defineStore } from 'pinia'
import { toRaw, ref, computed } from 'vue'
import DynamicTask from './services/DynamicTask'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([])
    const id = ref(0)

    function createTask(config) {
        config.id = id.value
        tasks.value.push(new DynamicTask(config))
        id.value++
    }

    function filter(name) {
        return tasks.value.filter(task => task.name === name)
    }

    function removeTask(id) {
        const index = tasks.value.findIndex(task => task.id === id)

        if(index === -1) return
        tasks.value.splice(index, 1)
    }

    return {
        tasks,
        createTask,
        filter,
        removeTask
    }
})