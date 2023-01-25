import Task from '../Task'

function Weather() {
    Task.call(this)
}

Weather.prototype = Object.create(Task.prototype)

export default Weather