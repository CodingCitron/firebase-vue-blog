import Task from '../Task'

function Calendar() {
    Task.call(this)
}

Calendar.prototype = Object.create(Task.prototype)

export default Calendar