import { useButtonStore } from '@/strores/button'
import { storeToRefs } from 'pinia'

function Task(config) {
    this.name = config.name
    this.option = config.option
    this.style = config.style
    
    this.toggle = config.toggle || false 
    
    const buttonStore = useButtonStore()
    this.linked = buttonStore.getButton(config.linked)

    console.log(this.linked)
    this.init()
}

Task.prototype.init = function () {
    // this.setComponent()
}

Task.prototype.outSideClick = function (e) {
    if(!this.toggle) return
    console.log(this.linked)
    const { element } = this.linked

    if(e.target.closest(`.${element.classList[0]}`) === element) return
    this.toggleHandler()
}

Task.prototype.setElement = function (element) {
    this.element = element
}

Task.prototype.toggleHandler = function () {
    this.toggle = !this.toggle
}

Task.prototype.close = function (param) {
    console.log(param)

    console.log(this)
    console.log(this.getRepository())

    const instance = this.getRepository()
    instance.removeTask(this)
}

export default Task