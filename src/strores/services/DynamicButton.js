import Calendar from './buttons/CalendarButton'
import Folder from './buttons/FolderButton'
import StartMenu from './buttons/StartMenuButton'
import Weather from './buttons/WeatherButton'
import CommandProcessor from './buttons/CommandProcessorButton'
import Post from './buttons/PostButton'

const BUTTONS = {
    Calendar,
    Folder,
    StartMenu,
    Weather,
    CommandProcessor,
    Post,
}

export default function DynamicButton(name, config) {
    console.log(name, config)
    return new BUTTONS[name](config)
}

