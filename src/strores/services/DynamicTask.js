import Calendar from './tasks/Calendar'
import Folder from './tasks/Folder'
import StartMenu from './tasks/StartMenu'
import Weather from './tasks/Weather'
import CommandProcessor from './tasks/CommandProcessor'

const TASKS = {
    Calendar,
    Folder,
    StartMenu,
    Weather,
    CommandProcessor
}

function DynamicTask(name, config) {
    return new TASKS[name](config)
}

export default DynamicTask