function MouseDragging(config) {
    this.scope = config || document.body

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}

    this.mouseDown = false
    this.rectangle = {}
    this.style = {
        position: 'absolute',
        backgroundColor: '#E6005FB8',
        overflow: 'hidden',
    }
}

MouseDragging.prototype.setScope = function (target, callback) {
    this.scope = target
    callback()
}

MouseDragging.prototype.activeEvent = function () {
    this.scope.addEventListener(
        'mousedown', 
        this.downHandler.bind(this)
    )

    this.scope.addEventListener(
        'mousemove', 
        this.moveHandler.bind(this)
    )

    this.scope.addEventListener(
        'mouseup', 
        this.upHandler.bind(this)
    )
}

MouseDragging.prototype.createBorder = function () {
    const div = this.rectangle.element
    
    const left = document.createElement('div')
    const right = document.createElement('div')
    const top = document.createElement('div')
    const bottom = document.createElement('div')

    left.style.position = 'absolute'
    left.style.left = '0px'
    left.style.width = '1px'
    left.style.height = '100%'

    right.style.position = 'absolute'
    right.style.right = '0px'
    right.style.width = '1px'
    right.style.height = '100%'
    
    top.style.position = 'absolute'
    top.style.top = '0px'
    top.style.height = '1px'
    top.style.width = '100%'

    bottom.style.position = 'absolute'
    bottom.style.bottom = '0px'
    bottom.style.height = '1px'
    bottom.style.width = '100%'

    div.append(left)
    div.append(right)
    div.append(top)
    div.append(bottom)
}

MouseDragging.prototype.downHandler = function (e) {
    e.preventDefault()
    this.mouseDown = true
    
    const div = this.rectangle.element = document.createElement('div')

    Object.keys(this.style).forEach(property => div.style[property] = this.style[property])

    this['down-value'].left = e.x
    this['down-value'].top = e.y

    div.style.left = `${e.x}px`
    div.style.top = `${e.y}px`

    this.createBorder()
    this.scope.append(div)
}

MouseDragging.prototype.moveHandler = function (e) {
    if(!this.mouseDown) return 

    const div = this.rectangle.element
    
    let h = e.y - this['down-value'].top 
    
    console.log(h)

    div.style.width = `${e.x - this['down-value'].left}px`
    div.style.height = `${e.y - this['down-value'].top}px`
}

MouseDragging.prototype.upHandler = function (e) {
    if(!this.mouseDown) return 
    this.mouseDown = false

    // this.rectangle.element.remove()

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}
}

MouseDragging.prototype.unmounted = function () {
    this.scope.removeEventListener(
        'mousedown', 
        this.downHandler.bind(this)
    )
}

export default MouseDragging