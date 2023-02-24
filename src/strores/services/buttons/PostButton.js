import Button from '../Button'

function PostButton(config) {
    Button.call(this, config)
}

PostButton.prototype = Object.create(Button.prototype)
PostButton.prototype.constructor = PostButton

export default PostButton