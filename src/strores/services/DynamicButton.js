import Calendar from './buttons/CalendarButton'
import Folder from './buttons/FolderButton'
import StartMenu from './buttons/StartMenuButton'
import Weather from './buttons/WeatherButton'
import CommandProcessor from './buttons/CommandProcessorButton'

const BUTTONS = {
    Calendar,
    Folder,
    StartMenu,
    Weather,
    CommandProcessor
}

export default function DynamicButton(name, config) {
    return new BUTTONS[name](config)
}

