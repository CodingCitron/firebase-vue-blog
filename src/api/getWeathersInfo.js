import axios from 'axios'

function getWeatherInfo({ lat, lon }) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
    )
}

export default getWeatherInfo

// axios.get(`${url}`)