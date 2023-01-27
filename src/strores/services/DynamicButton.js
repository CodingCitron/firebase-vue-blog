import Calendar from './buttons/CalendarButton'
import Folder from './buttons/FolderButton'
import StartMenu from './buttons/StartMenuButton'
import Weather from './buttons/WeatherButton'

const BUTTONS = {
    Calendar,
    Folder,
    StartMenu,
    Weather
}

export default function DynamicButton(name, config) {
    return new BUTTONS[name](config)
}

