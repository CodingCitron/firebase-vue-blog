import axios from 'axios'

// https://www.geojs.io/docs/v1/endpoints/geo/
function locationInfo (ip) {
    return axios.get(`https://get.geojs.io/v1/ip/geo/${ip}.json`)
}

export default locationInfo