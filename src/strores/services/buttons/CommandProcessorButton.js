import Button from '../Button'

function CommandProcessorButton(config) {
    Button.call(this, config)
}

CommandProcessorButton.prototype = Object.create(Button.prototype)
CommandProcessorButton.prototype.constructor = CommandProcessorButton

CommandProcessorButton.prototype.click = function () {
    const array = this.getRepository()
    if(array.length === 0) this.createTask()
}

export default CommandProcessorButton