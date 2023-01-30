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

    this.repository = new WeakMap()
    this.repository.set(this, [])

    this.init()
}

Button.prototype.click = function () {}

Button.prototype.rightClick = function () {}

Button.prototype.toggleHandler = function () {
    const array = this.repository.get(this)
    if(array.length === 1) array[0].toggle = !array[0].toggle
}

Button.prototype.setElement = function (element) {
    this.element = element
}

Button.prototype.init = function () {
    const { option, style } = this['task-info']
    if(option.created) this.createTask()
}

Button.prototype.createTask = function () {
    const taskStore = useTaskStore()
    const { tasks } = storeToRefs(taskStore)

    const array = this.repository.get(this)

    const task = new DynamicTask(
        this.name, 
        {
            name: this.name,
            ...this['task-info'],
            key: this,
        }
    )

    array.push(task)
    tasks.value.push(task)
}

export default Button