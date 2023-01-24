<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Calendar from '../../utils/date'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    config: Object
})

const days = ['일', '월', '화', '수', '목', '금', '토']
const date = ref(new Calendar())

let intervalId = null
if(props.type === 'button') intervalId = setInterval(date.value.update(), 1000)

onUnmounted(() => {
    if(intervalId) clearInterval(intervalId)
})

const getFormatTime = computed(
    () => 
    `${date.value.meridiem} ${date.value.formatHour}:${date.value.addZero(date.value.minute)}`
)
const getFormatDate = computed(
    () => 
    `${date.value.year}-${date.value.addZero(date.value.month + 1)}-${date.value.day}`
)

const today = computed(() => { 
    const { month, day, week } = date.value
    return `${month + 1}월 ${day}일 ${week}`
})

// 42 개를 보여줘야함
const yearMonth = computed(() => {
    const { currentYear, currentMonth } = date.value
    return `${currentYear}년 ${currentMonth + 1}월`
})

const prevDate = computed(() => {
    const { prevDate, prevDay } = date.value
    const array = [...Array(date.value.prevDate).keys()].map(i => i + 1).slice(prevDate - prevDay - 1, prevDate)

    return array 
})

const nextDate = computed(() => {
    const nextDayView = 42 - (date.value.nextDate + prevDate.value.length)

    const array = [...Array(nextDayView).keys()].map(i => i + 1)
    return array
})

function prevHandler() {
    const { currentYear, currentMonth } = date.value
    const thisMonth = new Date(currentYear, currentMonth - 1, 1)
    date.value.calcData(thisMonth)
}

function nextHandler() {
    const { currentYear, currentMonth } = date.value
    const thisMonth = new Date(currentYear, currentMonth + 1, 1)
    date.value.calcData(thisMonth)
}

const emits = defineEmits(['taskbar-button-click'])
</script>
<template>
    <button 
        @click="e => emits('taskbar-button-click', e)"
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
            :style="config && config.style"
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
                                <button @click="prevHandler">prev</button>
                                <button @click="nextHandler">next</button>
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
                                    class="day silver"    
                                >
                                    {{ day }}
                                </div>
                                <div 
                                    v-for="day in date.nextDate"
                                    class="day"
                                >
                                    {{ day }}
                                </div>
                                <div 
                                    v-for="day in nextDate"
                                    class="day silver"    
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