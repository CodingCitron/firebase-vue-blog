import TaskButton from '../TaskButton'

function WeatherButton() {
    TaskButton.call(this)
}

WeatherButton.prototype = Object.create(TaskButton.prototype)

export default WeatherButton