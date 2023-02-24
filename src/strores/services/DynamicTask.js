import Calendar from './tasks/Calendar'
import Folder from './tasks/Folder'
import StartMenu from './tasks/StartMenu'
import Weather from './tasks/Weather'
import CommandProcessor from './tasks/CommandProcessor'
import Post from './tasks/Post'

const TASKS = {
    Calendar,
    Folder,
    StartMenu,
    Weather,
    CommandProcessor,
    Post
}

function DynamicTask(config) {
    return new TASKS[config.name](config)
}

export default DynamicTask