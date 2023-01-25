import initData from './init-data.json'
import { defineAsyncComponent } from 'vue'

const TASKS = {}
const TASK_BUTTONS = {}

initData.tasks.forEach(obj => {
    TASKS[obj.name] = defineAsyncComponent(
        () => import(`../components/tasks/${obj.name}.vue`)
    )
    TASK_BUTTONS[obj.name] = defineAsyncComponent(
        () => import(`../components/task-buttons/${obj['button-name']}.vue`)
    )
})

export {
    TASKS,
    TASK_BUTTONS
}