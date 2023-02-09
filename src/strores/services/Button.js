import { useTaskStore } from '@/strores/task'

function Button(config) {
    const { button } = config
    
    this.id = config.id
    this.name = config.name

    this['task-info'] = config.task
    this['scope-component'] = button['scope-component']
    this['style'] = button.style
    this['icon-name'] = button['icon-name']
    this['option'] = button.option

    this.init()
}

Button.prototype.click = function () {

}

Button.prototype.rightClick = function () {

}

Button.prototype.toggleHandler = function () {
    const taskStore = useTaskStore()
    const filteredArray = taskStore.filter(this.name)

    if(filteredArray.length !== 1) return
    filteredArray[0].toggle = !filteredArray[0].toggle
}

Button.prototype.setElement = function (element) {
    this.element = element
}

Button.prototype.getToggle = function () {
    const taskStore = useTaskStore()
    const filteredArray = taskStore.filter(this.name)

    if(filteredArray.length !== 1) return
    return filteredArray[0].toggle
}

Button.prototype.init = function () {
    const { option, style } = this['task-info']
    if(option.created) this.createTask()
}

Button.prototype.createTask = function () {
    const taskStore = useTaskStore()

    taskStore.createTask({
        name: this.name,
        ...this['task-info'],
        linked: this.id,
    })
}

Button.prototype.removeTask = function (id) {
    const taskStore = useTaskStore()

    taskStore.removeTask(id)
}

export default Button