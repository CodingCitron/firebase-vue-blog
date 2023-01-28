function DraggableElement(config) {
    this.target = config.target || undefined
    this.down = false

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}
}

DraggableElement.prototype.init = function (target) {
    this.target = target

    this.target.addEventListener('mousedown', this.downHandler.bind(this))
}

DraggableElement.prototype.downHandler = function (e) {
    e.preventDefault()

    this.dwon = true
    addEventListener('mousemove', this.moveHandler.bind(this))
    addEventListener('mouseup', this.upHandler.bind(this))
}

DraggableElement.prototype.moveHandler = function () {
    if(!this.down) return
}

DraggableElement.prototype.upHandler = function () {
    if(!this.down) return

    this.dwon = false
    removeEventListener('mousemove', this.moveHandler.bind(this))
    removeEventListener('mouseup', this.upHandler.bind(this))
}

DraggableElement.prototype.unMounted = function () {
    this.target.removeEventListener('mousedown', this.downHandler.bind(this))
    // removeEventListener('mousemove', this.moveHandler.bind(this))
    // removeEventListener('mouseup', this.upHandler.bind(this))
}


export default DraggableElement