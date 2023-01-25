import TaskButton from '../TaskButton'

function StartMenu() {
    TaskButton.call(this)
}

StartMenu.prototype = Object.create(TaskButton.prototype)

export default StartMenu