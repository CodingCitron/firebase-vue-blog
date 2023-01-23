<script setup>
import { ref, computed, defineEmits, onMounted, onUnmounted } from 'vue'
import { getDate, format, createCalenderValue } from '../utils/date'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    config: Object
})

const date = ref({
    date: '',
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
    meridiem: '',
    formatHour: '',
    formatDate: ''
})

const krDate = ref({
    today: '', 
    thisMonth: '', 
    currentYear: '', 
    currentMonth: '', 
    currentDate: '', 
    startDay: '', 
    prevDate: '', 
    prevDay: '',
    endDay: '',
    nextDate: '',
    nextDay: ''
})

let intervalId = null

function updateTime() {
    const obj = getDate()

    Object.keys(obj).forEach(key => 
        date.value[key] = obj[key]
    )
}

if(props.type === 'button') {
    updateTime()
    intervalId = setInterval(updateTime, 1000)
}

if(props.type === 'widget') {
    let obj = createCalenderValue()

    Object.keys(obj).forEach(key => {
        krDate.value[key] = obj[key]
    })

    console.log(krDate.value)
}

onUnmounted(() => {
    if(intervalId) clearInterval(intervalId)
})

const getFormatTime = computed(() => `${date.value.meridiem} ${date.value.formatHour}:${format(date.value.minute).addZero()}`)
const getFormatDate = computed(() => `${date.value.year}-${format(date.value.month).addZero()}-${date.value.day}`)

const days = ['일', '월', '화', '수', '목', '금', '토']

const today = computed(() => { 
    const { currentMonth, currentDate, week } = krDate.value
    return `${currentMonth}월 ${currentDate}일 ${week}`
})

const yearMonth = computed(() => {
    const { currentYear, currentMonth } = krDate.value
    return `${currentYear}년 ${currentMonth}월`
})

const prevDate = computed(() => {
    const { prevDate, prevDay } = krDate.value
    const array = [...Array(krDate.value.prevDate).keys()].map(i => i + 1).slice(prevDate - prevDay, prevDate)
    return array 
})

const nextDate = computed(() => {
    const { nextDay } = krDate.value
    const array = [...Array((7 - nextDay == 7 ? 0 : 7 - nextDay)).keys()].map(i => i + 1)
    return array
})

const emits = defineEmits(['widget-click'])
</script>
<template>
    <button 
        @click="e => emits('widget-click', e)"
        v-if="type === 'button'"
        class="task-bar-time widget-button"
    >
        <div class="time">
            {{ getFormatTime }}
        </div>
        <div class="date">
            {{ getFormatDate }}
        </div>
    </button>
    <Transition
        name="slide"
    >
        <div 
            v-show="type === 'widget' && config.option.toggle"
            class="theme-light widget-calender no-select"
            :style="config && config['widget-style']"
        >
            <div class="widget-calender-wrap">
                <header>
                    <div class="widget-color-transition">{{ today }}</div>
                    <button class="toggle-button-1">

                    </button>
                </header>
                <Transition>
                    <div class="calender-view">
                        <header class="calender-view-header">
                            <button 
                                class="bold 
                                year-month-button
                                widget-background-transition"
                            >
                                {{ yearMonth }}
                            </button>
                            <div>
                                <button>A</button>
                                <button>B</button>
                            </div>
                        </header>
                        <div class="calender-view-main">
                            <div class="days">
                                <div
                                    v-for="day in days" 
                                    class="day"
                                >
                                    {{ day }}
                                </div>
                            </div>
                            <div class="days">
                                <div 
                                    v-for="day in prevDate"
                                    class="day"    
                                >
                                    {{ day }}
                                </div>
                                <div 
                                    v-for="day in krDate.nextDate"
                                    class="day"
                                >
                                    {{ day }}
                                </div>
                                <div 
                                    v-for="day in nextDate"
                                    class="day"    
                                >
                                    {{ day }}
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </Transition>
</template>
<style scoped>
.task-bar-time {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    gap: 2px;
}

.date,
.time {
    width: 100%;
    text-align: right;
}

.widget-calender-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.widget-calender .widget-calender-wrap > header {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.widget-calender .calender-view {
    flex: 1;
    padding: 12px;
}

.widget-calender .calender-view-header {
    display: flex;
}

.widget-calender .year-month-button {
    width: 60%;
    padding: 4px;
    text-align: left;
}

.widget-calender .days {
    display: flex;
    flex-wrap: wrap;
}

.widget-calender .day {
    width: calc(100% / 7);
    text-align: center;
    padding: 4px;
}

/* 트랜지션 전용 스타일 */
.slide-enter-from,
.slide-leave-to {
    transform: translateX(calc(100% + 50px));
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 1s;
}
</style>