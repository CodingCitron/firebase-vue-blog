function MouseDragging(config) {
    this.scope = config || document.body
    this.left = null
    this.top = null
    this.width = null
    this.height = null
}

MouseDragging.prototype.setScope = function (target) {
    this.scope = target
}

MouseDragging.prototype.unmounted = function () {

}

export default MouseDragging