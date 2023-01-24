<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Calendar from '../services/Calendar'

const props = defineProps({
    config: Object
})

const date = ref(new Calendar())

let intervalId = setInterval(date.value.update.bind(date.value), 1000)

const getFormatTime = computed(
    () => 
    `${date.value.meridiem} ${date.value.formatHour}:${date.value.addZero(date.value.minute)}`
)
const getFormatDate = computed(
    () => 
    `${date.value.year}-${date.value.addZero(date.value.month + 1)}-${date.value.day}`
)

const emits = defineEmits(['taskbar-button-click'])

onUnmounted(() => {
    if(intervalId) clearInterval(intervalId)
})
</script>
<template>
    <button 
        :title="`${date.year}년 ${date.month + 1}월 ${date.day}일 ${date.week}`"
        @click="e => emits('taskbar-button-click', e)"
        class="task-bar-time widget-button"
        :class="config.option.toggle? 'active' : ''"
    >
        <div class="time">
            {{ getFormatTime }}
        </div>
        <div class="date">
            {{ getFormatDate }}
        </div>
    </button>
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
</style>