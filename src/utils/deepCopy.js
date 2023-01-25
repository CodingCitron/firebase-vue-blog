export default function deepCopy (obj) {
    if(obj === null || typeof obj !== 'object') return obj
    let copy = {}

    if(Array.isArray(obj)) copy = []

    for (let key in obj) {
        copy[key] = deepCopy(obj[key])
    }

    return copy
}