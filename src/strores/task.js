import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([])

    function getTask(name) {
        return computed(() => tasks.value.filter(task => task.name === name))
    }

    function getButton() {

    }

    return {
        tasks,
        getTask,
        getButton
    }
})