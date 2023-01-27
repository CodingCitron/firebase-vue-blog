import Button from '../Button'

function FolderButton(config) {
    Button.call(this, config)
}

FolderButton.prototype = Object.create(Button.prototype)
FolderButton.prototype.constructor = FolderButton

export default FolderButton