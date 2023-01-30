function MouseDragging(config) {
    this.scope = config || document.body

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}

    this.mouseDown = false
    this.rectangle = {}
    this.style = {
        position: 'absolute',
        backgroundColor: 'rgba(0, 120, 215, 0.5)',
        overflow: 'hidden',
    }

    this.selected = []
}

MouseDragging.prototype.setScope = function (target, callback) {
    this.scope = target
    this.unmounted()
    this.activeEvent()
}

MouseDragging.prototype.activeEvent = function () {
    if(!this.scope) return

    this.scope.addEventListener(
        'mousedown', 
        this.downHandler.bind(this)
    )

    addEventListener(
        'mousemove', 
        this.moveHandler.bind(this)
    )

    addEventListener(
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
    const color = 'rgba(0, 120, 215, 1)'

    left.style.position = 'absolute'
    left.style.left = '0px'
    left.style.width = '1px'
    left.style.height = '100%'
    left.style.backgroundColor = color

    right.style.position = 'absolute'
    right.style.right = '0px'
    right.style.width = '1px'
    right.style.height = '100%'
    right.style.backgroundColor = color

    top.style.position = 'absolute'
    top.style.top = '0px'
    top.style.height = '1px'
    top.style.width = '100%'
    top.style.backgroundColor = color

    bottom.style.position = 'absolute'
    bottom.style.bottom = '0px'
    bottom.style.height = '1px'
    bottom.style.width = '100%'
    bottom.style.backgroundColor = color

    div.append(left)
    div.append(right)
    div.append(top)
    div.append(bottom)
}

MouseDragging.prototype.downHandler = function (e) {
    if(e.target !== e.currentTarget) return

    e.preventDefault()
    this.mouseDown = true

    if(this.rectangle.element) this.rectangle.element.remove()
    const div = this.rectangle.element = document.createElement('div')

    Object.keys(this.style).forEach(property => div.style[property] = this.style[property])

    this['down-value'].left = e.x
    this['down-value'].top = e.y

    div.style.left = `${e.x}px`
    div.style.top = `${e.y}px`

    this.createBorder()
    this.scope.prepend(div)
}

MouseDragging.prototype.moveHandler = function (e) {
    if(!this.mouseDown) return 

    const div = this.rectangle.element
    
    let w = e.x - this['down-value'].left
    let h = e.y - this['down-value'].top 

    if(w < 0) {
        div.style.left = `${this['down-value'].left + w}px`
        div.style.width = `${Math.abs(w)}px`
    } else {
        div.style.width = `${w}px`
    }

    if(h < 0) {
        div.style.top = `${this['down-value'].top + h}px`
        div.style.height = `${Math.abs(h)}px`
    } else {
        div.style.height = `${h}px`
    }
}

MouseDragging.prototype.upHandler = function (e) {
    if(!this.mouseDown) return 

    this.mouseDown = false

    this.rectangle.element.remove()

    this['down-value'] = {}
    this['move-value'] = {}
    this['up-value'] = {}
}

MouseDragging.prototype.unmounted = function () {
    if(this.scope) {
        this.scope.removeEventListener(
            'mousedown', 
            this.downHandler.bind(this)
        )
        removeEventListener(
            'mousemove', 
            this.moveHandler.bind(this)
        )

        removeEventListener(
            'mouseup', 
            this.upHandler.bind(this)
        )
    }
}

export default MouseDragging