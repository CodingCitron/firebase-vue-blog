import Button from '../Button'

function WeatherButton(config) {
    Button.call(this, config)
}

WeatherButton.prototype = Object.create(Button.prototype)
WeatherButton.prototype.constructor = WeatherButton

export default WeatherButton