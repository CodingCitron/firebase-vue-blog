import Button from '../Button'

function CommandProcessorButton(config) {
    Button.call(this, config)
}

CommandProcessorButton.prototype = Object.create(Button.prototype)
CommandProcessorButton.prototype.constructor = CommandProcessorButton

CommandProcessorButton.prototype.click = function () {
    if(!this['linked-instance']) this.createTask()

    console.log(this['linked-instance'])
}

export default CommandProcessorButton