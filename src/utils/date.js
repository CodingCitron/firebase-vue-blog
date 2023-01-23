const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const KR_WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

function getDate() {
    const date = new Date()

    let utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000), // utc 표준 시
    kstGap = 9 * 60 * 60 * 1000, // 한국 kst 기준시간 더하기
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    meridiem = hour > 12? '오후' : '오전',
    formatHour = hour > 12? hour - 12 : hour,
    kr = {
        today: new Date(utc + kstGap)
    }

    return {
        date,
        utc,
        year,
        month,
        day,
        hour,
        minute,
        second,
        meridiem,
        formatHour,
        kr
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

function krToday() {
    const date = new Date()

    let utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000), // utc 표준 시
    kstGap = 9 * 60 * 60 * 1000 // 한국 kst 기준시간 더하기

    return new Date(utc + kstGap)
}

function createCalenderValue() {
    
    let today = krToday(),
    thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate()),

    currentYear = thisMonth.getFullYear(),
    currentMonth = thisMonth.getMonth(),
    currentDate = thisMonth.getDate(),

    startDay = new Date(currentYear, currentMonth, 0),
    prevDate = startDay.getDate(),
    prevDay = startDay.getDay(),

    endDay = new Date(currentYear, currentMonth + 1, 0),
    nextDate = endDay.getDate(),
    nextDay = endDay.getDay()

    const week = KR_WEEKDAY[thisMonth.getDay()]

    return {
        today, 
        thisMonth, 
        currentYear, 
        currentMonth: currentMonth + 1, 
        currentDate, 
        startDay, 
        prevDate, 
        prevDay,
        endDay,
        nextDate,
        nextDay,
        week
    }
}

export {
    getDate,
    format,
    krToday,
    createCalenderValue
}