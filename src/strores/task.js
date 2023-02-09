import { defineStore } from 'pinia'
import { toRaw, ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([])

    function getTask(name) {
        return computed(() => tasks.value.filter(task => task.name === name))
    }

    function removeTask(instance) {
        const index = tasks.value.findIndex(task => toRaw(task) === instance)

        if(index === -1) return
        tasks.value.splice(index, 1)
    }

    return {
        tasks,
        getTask,
        removeTask
    }
})