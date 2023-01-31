<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Calendar from '../services/Calendar'

const props = defineProps({
    config: Object
})

const days = ['일', '월', '화', '수', '목', '금', '토']
const date = ref(new Calendar())

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
    <Transition
        name="slide"
    >
        <div 
            v-show="config.toggle"
            v-click-outside="config.outSideClick.bind(config)"
            class="theme-light task-calendar no-select"
            :style="config && config.style"
        >
            <div class="task-calendar-wrap">
                <header>
                    <div class="task-color-transition">{{ today }}</div>
                    <button class="toggle-button-1">

                    </button>
                </header>
                <Transition>
                    <div class="calendar-view">
                        <header class="calendar-view-header">
                            <button 
                                class="bold 
                                year-month-button
                                task-background-transition"
                            >
                                {{ yearMonth }}
                            </button>
                            <div class="calendar-button-container">
                                <button 
                                    @click="prevHandler" 
                                    class="move-date silver"
                                >
                                    <span class="material-icons-round">
                                        arrow_drop_up
                                    </span>
                                </button>
                                <button 
                                    @click="nextHandler" 
                                    class="move-date silver"
                                >
                                    <span class="material-icons-round">
                                        arrow_drop_down
                                    </span>
                                </button>
                            </div>
                        </header>
                        <div class="calendar-view-main">
                            <div class="days bold">
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