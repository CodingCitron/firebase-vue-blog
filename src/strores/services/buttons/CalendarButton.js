import Button from '../Button'

function CalendarButton(config) {
    Button.call(this, config)
}

CalendarButton.prototype = Object.create(Button.prototype)
CalendarButton.prototype.constructor = CalendarButton

export default CalendarButton