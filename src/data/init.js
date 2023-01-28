import data from '@/data/init-data.json'
import { defineAsyncComponent } from 'vue'

const TASKS = {}
const BUTTONS = {}

data.tasks.forEach(obj => {
    TASKS[obj.name] = defineAsyncComponent(
        () => import(`../components/tasks/${obj.name}.vue`)
    )

    BUTTONS[obj.name] = defineAsyncComponent(
        () => import(`../components/buttons/${obj.name}Button.vue`)
    )
})

export {
    TASKS,
    BUTTONS
}