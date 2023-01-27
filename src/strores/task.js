import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([])

    return {
        tasks,
    }
})