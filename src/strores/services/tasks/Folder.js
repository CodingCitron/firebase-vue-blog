import Task from '../Task'

function Folder() {
    Task.call(this)
}

Folder.prototype = Object.create(Task.prototype)

export default Folder