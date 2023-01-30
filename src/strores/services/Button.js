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
    
    this.init()
}

Button.prototype.click = function () {}

Button.prototype.rightClick = function () {}

Button.prototype.toggleHandler = function () {
    this['linked-instance'].toggle = !this['linked-instance'].toggle
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

    let count = tasks.value.push(
        new DynamicTask(
            this.name, 
            {
                name: this.name,
                ...this['task-info'],
                'linked-instance': this
            }
        )
    )

    this['linked-instance'] = tasks.value[count - 1]
}

export default Button