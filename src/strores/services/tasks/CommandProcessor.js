import Task from '../Task'

function CommandProcessor(config) {
    Task.call(this, config)
}

CommandProcessor.prototype = Object.create(Task.prototype)
CommandProcessor.prototype.constructor = CommandProcessor

export default CommandProcessor