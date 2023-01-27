import Task from '../Task'

function Folder(config) {
    Task.call(this, config)
}

Folder.prototype = Object.create(Task.prototype)
Folder.prototype.constructor = Folder

export default Folder