import initData from './init-data.json'
import { defineAsyncComponent } from 'vue'

const TASKS = {}
const TASKBAR_BUTTONS = {}

initData.tasks.forEach(obj => {
    TASKS[obj.name] = defineAsyncComponent(
        () => import(`../components/tasks/${obj.name}.vue`)
    )
    TASKBAR_BUTTONS[obj.name] = defineAsyncComponent(
        () => import(`../components/taskbar-buttons/${obj['button-name']}.vue`)
    )
})

export {
    TASKS,
    TASKBAR_BUTTONS
}