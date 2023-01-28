
import { defineAsyncComponent, markRaw } from 'vue'
import DynamicTask from './DynamicTask'
import { useTaskStore } from '@/strores/task'
import { storeToRefs } from 'pinia'

function Button(config) {
    const { button } = config

    this.name = config.name
    this['task-info'] = config.task
    this['scope-component'] = button['scope-component']
    this['style'] = button.style
    this['icon-name'] = button['icon-name']
    this['option'] = button.option

    this['linked-instance']

    this.init()
}

Button.prototype.click = function () {}

Button.prototype.rightClick = function () {}

Button.prototype.toggleHandler = function () {
    this['linked-instance'].toggle = !this['linked-instance'].toggle
}

// Button.prototype.setComponent = function () {
//     this.component = markRaw(
//             defineAsyncComponent(
//             () => import(`/src/components/buttons/${this.constructor.name}.vue`)
//             //@/components/buttons/${this.constructor.name}.vue
//             //../../components/buttons/${this.constructor.name}.vue
//         )
//     )
// }

Button.prototype.init = function () {
    // this.setComponent()
    const { option, style } = this['task-info']
    if(option.created) this.createTask()
}

Button.prototype.createTask = function () {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    this['linked-instance'] = new DynamicTask(
        this.name, 
        {
            name: this.name,
            ...this['task-info']
        }
    )

    tasks.value.push(this['linked-instance'])
}

export default Button