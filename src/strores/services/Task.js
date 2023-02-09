import { useButtonStore } from '@/strores/button'
import { useTaskStore } from '@/strores/task'

function Task(config) {
    this.id = config.id || null
    this.name = config.name
    this.option = config.option
    this.style = config.style
    
    this.toggle = config.toggle || false 
    this.linked = config.linked

    this.init()
}

Task.prototype.init = function () {
    // this.setComponent()
}

Task.prototype.outSideClick = function (e) {
    if(!this.toggle) return

    const buttonStore = useButtonStore()
    const button = buttonStore.getButton(this.linked)

    if(e.target.closest(`.${button.element.classList[0]}`) === button.element) return
    this.toggleHandler()
}

Task.prototype.setElement = function (element) {
    this.element = element
}

Task.prototype.toggleHandler = function () {
    this.toggle = !this.toggle
}

Task.prototype.close = function () {
    const taskStore = useTaskStore()
    taskStore.removeTask(this.id)

    console.log(taskStore.tasks)
}

export default Task