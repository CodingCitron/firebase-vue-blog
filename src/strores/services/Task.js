import { defineAsyncComponent, markRaw } from 'vue'

function Task(config) {
    this.name = config.name
    this.option = config.option
    this.style = config.style

    this['linked-instance']

    this.init()
}

Task.prototype.setComponent = function () {
    this.component = markRaw(
            defineAsyncComponent(
            () => import(`../../components/tasks/${this.constructor.name}.vue`)
        )
    )
}

Task.prototype.init = function () {
    this.setComponent()
}

export default Task