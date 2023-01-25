import Calendar from './tasks/Calendar'
import Folder from './tasks/Folder'
import StartMenu from './tasks/StartMenu'
import Weather from './tasks/Weather'

const TASKS = {
    Calendar,
    Folder,
    StartMenu,
    Weather
}

function DynamicTask(name, config) {
    return new TASKS[name](config)
}

export default DynamicTask