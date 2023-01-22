function Widget(config) {
    this.name = config.name
    this['nav-position'] = config['nav-position']
    this.option = config.option
    this['widget-style'] = config['widget-style']
}

Widget.prototype.click = function() {
    if(this.name === 'Calender') this.toggleHandler()
}

Widget.prototype.toggleHandler = function() {
    this.option.toggle = !this.option.toggle
}

export default Widget