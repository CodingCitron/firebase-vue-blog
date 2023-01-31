function Task(config) {
    this.name = config.name
    this.option = config.option
    this.style = config.style
    
    this.toggle = config.toggle || false 
    
    this.repository = new WeakMap()
    this.repository.set(this, config.key)

    this.init()
}

Task.prototype.getRepository = function () {
    return this.repository.get(this)
}

Task.prototype.init = function () {
    // this.setComponent()
}

Task.prototype.outSideClick = function (e) {
    if(!this.toggle) return
    const { element } = this.getRepository()

    if(e.target.closest(`.${element.classList[0]}`) === element) return
    this.toggleHandler()
}

Task.prototype.setElement = function (element) {
    this.element = element
}

Task.prototype.toggleHandler = function () {
    this.toggle = !this.toggle
}

export default Task