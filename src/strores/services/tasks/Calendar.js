import Task from '../Task'

function Calendar(config) {
    Task.call(this, config)
}

Calendar.prototype = Object.create(Task.prototype)
Calendar.prototype.constructor = Calendar

export default Calendar