import Task from '../Task'

function Post(config) {
    Task.call(this, config)
}

Post.prototype = Object.create(Task.prototype)
Post.prototype.constructor = Post

export default Post