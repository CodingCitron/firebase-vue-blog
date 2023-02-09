import DynamicTask from './DynamicTask'
import { toRaw } from 'vue'
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

    const taskStore = useTaskStore()
    this.tasks = taskStore.getTask(this.name)

    this.init()
}

Button.prototype.click = function () {}

Button.prototype.rightClick = function () {}

Button.prototype.toggleHandler = function () {
    if(this.tasks.length === 1) {
        this.tasks[0].toggle = !this.tasks[0].toggle
    }
}

Button.prototype.setElement = function (element) {
    this.element = element
}

Button.prototype.getToggle = function () {
    if(this.tasks.length !== 1) return
    return this.tasks[0].toggle
}

Button.prototype.init = function () {
    const { option, style } = this['task-info']
    if(option.created) this.createTask()
}

Button.prototype.createTask = function () {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    tasks.value.push(new DynamicTask(
        this.name, 
        {
            name: this.name,
            ...this['task-info'],
            linked: this,
        }
    ))
}

Button.prototype.removeTask = function (object) {
    const taskStore = useTaskStore()
    taskStore.removeTask(object)
}

export default Button