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

Task.prototype.setElement = function (element) {
    this.element = element
}

Task.prototype.toggleHandler = function () {
    this.toggle = !this.toggle
}

export default Task