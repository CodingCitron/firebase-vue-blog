import Task from '../Task'

function StartMenu(config) {
    Task.call(this, config)
}

StartMenu.prototype = Object.create(Task.prototype)
StartMenu.prototype.constructor = StartMenu

export default StartMenu