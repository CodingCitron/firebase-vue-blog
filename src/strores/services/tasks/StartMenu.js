import Task from '../Task'

function StartMenu() {
    Task.call(this)
}

StartMenu.prototype = Object.create(Task.prototype)

export default StartMenu