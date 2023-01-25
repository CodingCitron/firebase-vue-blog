import Task from './Task'

function TaskButton(config) {
    this.name = config.name
    this['nav-position'] = config['nav-position']
    this.option = config.option
    this['style'] = config['style']
    this['button-name'] = config['button-name']
    this['icon-img-path'] = config['icon-img-path']
}

TaskButton.prototype.linked = function(object) {
    this['linked-instance'] = object
}

TaskButton.prototype.createTask = function () {

    return /* 인스턴스 */
}

TaskButton.prototype.click = function () {

}

TaskButton.prototype.rightClick = function() {

}

TaskButton.prototype.toggleHandler = function() {
    this.option.toggle = !this.option.toggle
}

export default TaskButton