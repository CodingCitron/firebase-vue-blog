import TaskButton from './TaskButton'

function Task(config) {
    this.name = config.name
    this['style'] = config['style']
}

Task.prototype.linked = function(object) {
    this['linked-instance'] = object
}

Task.prototype.createTaskButton = function () {

    return /* 인스턴스 */
}

export default Task