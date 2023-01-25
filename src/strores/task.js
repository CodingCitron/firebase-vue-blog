import { defineStore } from 'pinia'
import { ref } from 'vue'
import initData from '../data/init-data.json'
import Button from './services/TaskButton'
import DynamicTask from './services/DynamicTask'
import DynamicTaskButton from './services/DynamicTaskButton'

export const useTaskStore = defineStore('task', () => {
    const task = ref([])
    const taskButtons = ref([])

    function registerButtons() {

    }

    initData.tasks.forEach(data => taskButtons.value.push(new Button(data)))

    return {
        task,
        taskButtons,
        registerButtons
    }
})