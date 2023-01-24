const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const KR_WEEKDAY = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

function Calendar () {
    this.date = new Date()
    this.utc = this.date.getTime() + (this.date.getTimezoneOffset() * 60 * 1000)
    this.kstGap = 9 * 60 * 60 * 1000

    this.today = new Date(this.utc + this.kstGap)
    this.thisMonth = new Date(
        this.today.getFullYear(), 
        this.today.getMonth(), 
        this.today.getDate()
    )

    this.week = KR_WEEKDAY[this.today.getDay()]

    this.calcData(this.thisMonth)
    this.update()
}

Calendar.prototype.update = function () {
    console.log(this)
    const date = this.date 
    
    this.year = date.getFullYear()
    this.hour = date.getHours()
    this.month = date.getMonth()
    this.day = date.getDate()
    this.minute = date.getMinutes()
    this.second = date.getSeconds()
    this.meridiem = this.hour > 12? '오후' : '오전'
    this.formatHour = this.hour > 12? this.hour - 12 : this.hour
}

Calendar.prototype.calcData = function (thisMonth) {
    this.currentYear = thisMonth.getFullYear()
    this.currentMonth = thisMonth.getMonth()
    this.currentDate = thisMonth.getDate()

    // 이전 달의 마지막 날 날짜와 요일 구하기
    this.startDay = new Date(this.currentYear, this.currentMonth, 0)
    this.prevDate = this.startDay.getDate()
    this.prevDay = this.startDay.getDay()

    // 이번 달의 마지막날 날짜와 요일 구하기
    this.endDay = new Date(this.currentYear, this.currentMonth + 1, 0)
    this.nextDate = this.endDay.getDate()
    this.nextDay = this.endDay.getDay()
}

Calendar.prototype.addZero = function (value) {
    return value < 10 ? `0${value}` : value
}

export default Calendar