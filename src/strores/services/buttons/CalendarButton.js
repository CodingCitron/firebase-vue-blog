import TaskButton from '../TaskButton'

function CalendarButton() {
    TaskButton.call(this)
}

CalendarButton.prototype = Object.create(TaskButton.prototype)

export default CalendarButton