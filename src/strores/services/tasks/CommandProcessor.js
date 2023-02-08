import Task from '../Task'

CommandProcessor['wrap-config'] = {
    header: {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '30px',
            fontSize: '12px',
            padding: '0 8px'
        },
        className: 'header',
        title: '명령 프롬프트',
        iconName: 'terminal-icon.png'
    },
    style: {
        // ...props.config.style,
        borderRadius: '4px',
        overflow: 'hidden',
    },
    className: 'command-prompt-container',
}

function CommandProcessor(config) {
    Task.call(this, config)

    Object.assign(
        CommandProcessor['wrap-config'].style, 
        config.style
    )
}

CommandProcessor.prototype = Object.create(Task.prototype)
CommandProcessor.prototype.constructor = CommandProcessor

CommandProcessor.prototype.getWrapConfig = function () {
    return CommandProcessor['wrap-config']
}

export default CommandProcessor