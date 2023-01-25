import TaskButton from '../TaskButton'

function FolderButton() {
    TaskButton.call(this)
}

FolderButton.prototype = Object.create(TaskButton.prototype)

export default FolderButton