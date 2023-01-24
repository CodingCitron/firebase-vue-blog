function TaskbarButton(config) {
    this.name = config.name
    this['nav-position'] = config['nav-position']
    this.option = config.option
    this['style'] = config['style']
}

TaskbarButton.prototype.click = function() {
    if(this.name === 'Calendar') this.toggleHandler()
}

TaskbarButton.prototype.toggleHandler = function() {
    this.option.toggle = !this.option.toggle
}

export default TaskbarButton