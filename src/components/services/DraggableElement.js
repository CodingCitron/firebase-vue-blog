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
    addEventListener('mousemove', this.moveHandler.bind(this))
    addEventListener('mouseup', this.upHandler.bind(this))
}

DraggableElement.prototype.downHandler = function (e) {
    e.preventDefault()

    this.down = true

    this['down-value'] = {
        left: e.x,
        top: e.y
    }
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
    this['down-value'].left = e.y
    
    console.log(this.target.offsetLeft)
    console.log(this.target.offsetTop)
    console.log(this['move-value'].x)
    console.log(this['move-value'].y)
    this.target.style.left = (this.target.offsetLeft - this['move-value'].x) + 'px' 
    this.target.style.top = (this.target.offsetTop - this['move-value'].y) + 'px' 
}

DraggableElement.prototype.upHandler = function (e) {
    if(!this.down) return
    this.down = false
}

DraggableElement.prototype.unMounted = function () {
    this.target.removeEventListener('mousedown', this.downHandler.bind(this))
    removeEventListener('mousemove', this.moveHandler.bind(this))
    removeEventListener('mouseup', this.upHandler.bind(this))
}


export default DraggableElement