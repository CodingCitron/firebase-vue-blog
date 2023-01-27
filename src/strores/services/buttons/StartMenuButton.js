import Button from '../Button'

function StartMenuButton(config) {
    Button.call(this, config)
}

StartMenuButton.prototype = Object.create(Button.prototype)
StartMenuButton.prototype.constructor = StartMenuButton

export default StartMenuButton