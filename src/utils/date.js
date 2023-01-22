function getDate() {
    const date = new Date()

    let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    meridiem = hour > 12? '오후' : '오전',
    formatHour = hour > 12? hour - 12 : hour

    return {
        date,
        year,
        month,
        day,
        hour,
        minute,
        second,
        meridiem,
        formatHour,
    }
}

function addZero(value) {
    return value < 10 ? `0${value}` : value
}

function format(value) { 
    return {
        addZero: () => addZero(value)
    }
}

export {
    getDate,
    format
}