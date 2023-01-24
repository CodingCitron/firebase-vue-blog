import axios from 'axios'

function getIp () {
    return axios.get('https://api.ipify.org?format=json')
}

export default getIp
