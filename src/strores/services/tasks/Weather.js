import Task from '../Task'

function Weather(config) {
    Task.call(this, config)
}

Weather.prototype = Object.create(Task.prototype)
Weather.prototype.constructor = Weather

export default Weather