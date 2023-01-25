import Calendar from './buttons/CalendarButton'
import Folder from './buttons/FolderButton'
import StartMenu from './buttons/StartMenuButton'
import Weather from './buttons/WeatherButton'

const TASK_BUTTONS = {
    Calendar,
    Folder,
    StartMenu,
    Weather
}

export default function DynamicTaskButton(name, config) {
    return new TASK_BUTTONS[name](config)
}

