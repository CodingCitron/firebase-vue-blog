import { defineAsyncComponent, markRaw } from 'vue'

function Task(config) {
    this.name = config.name
    this.option = config.option
    this.style = config.style

    this['linked-instance']

    this.init()
}

Task.prototype.init = function () {
    // this.setComponent()
}

export default Task