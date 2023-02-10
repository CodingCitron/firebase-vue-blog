function DraggableElement(config) {
    this.target = config.target || undefined
    this.down = false

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}
}

DraggableElement.prototype.init = function (target) {
    if(!target) return

    this.target = target
    this.target.addEventListener('mousedown', this.downHandler.bind(this))
}

DraggableElement.prototype.setHeader = function (target) {
    this.header = target
}

DraggableElement.prototype.condition = function (e) {
    return (
        e.button !== 0 || 
        this.header !== e.target
    )
}

DraggableElement.prototype.downHandler = function (e) {
    if(this.condition(e)) return

    e.preventDefault()
    this.down = true

    this['down-value'] = {
        left: e.x,
        top: e.y
    }

    document.addEventListener('mousemove', this.moveHandler.bind(this))
    document.addEventListener('mouseup', this.upHandler.bind(this))
}

DraggableElement.prototype.moveHandler = function (e) {
    if(!this.down) return

    e.preventDefault()
    const { left, top } = this['down-value']

    this['move-value'] = {
        x: left - e.x, 
        y: top - e.y, 
    }

    this['down-value'].left = e.x
    this['down-value'].top = e.y

    this.target.style.left = (this.target.offsetLeft - this['move-value'].x) + 'px' 
    this.target.style.top = (this.target.offsetTop - this['move-value'].y) + 'px' 
}

DraggableElement.prototype.upHandler = function (e) {
    document.removeEventListener('mousemove', this.moveHandler.bind(this))
    document.removeEventListener('mouseup', this.upHandler.bind(this))

    if(!this.down) return
    this.down = false
}

export default DraggableElement