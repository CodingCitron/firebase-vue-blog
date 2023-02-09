import Button from '../Button'
import { useTaskStore } from '@/strores/task'

function CommandProcessorButton(config) {
    Button.call(this, config)
}

CommandProcessorButton.prototype = Object.create(Button.prototype)
CommandProcessorButton.prototype.constructor = CommandProcessorButton

CommandProcessorButton.prototype.click = function () {
    const taskStore = useTaskStore()

    if(taskStore.filter(this.name).length === 0) this.createTask()
}

export default CommandProcessorButton