function Task(config) {
    this.name = config.name
    this.option = config.option
    this.style = config.style

    this.repository = new WeakMap()
    this.repository.set(this, config.key)

    this.init()
}

Task.prototype.getLinkInfo = function () {
    return this.repository.get(this)
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