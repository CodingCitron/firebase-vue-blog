<script setup>
import { ref, computed, defineEmits, onMounted, onUnmounted } from 'vue'
import { getDate, format } from '../utils/date'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    option: Object,
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

onUnmounted(() => {
    if(intervalId) clearInterval(intervalId)
})

const getFormatTime = computed(() => `${date.value.meridiem} ${date.value.formatHour}:${format(date.value.minute).addZero()}`)
const getFormatDate = computed(() => `${date.value.year}-${format(date.value.month).addZero()}-${date.value.day}`)

const emits = defineEmits(['widget-click'])
</script>
<template>
    <button 
        @click="e => emits('widget-click', e)"
        v-if="type === 'button'"
        class="task-bar-time"
    >
        <div class="time">
            {{ getFormatTime }}
        </div>
        <div class="date">
            {{ getFormatDate }}
        </div>
    </button>
    <div v-if="type === 'widget' && option.toggle">
        asdad
    </div>
</template>
<style scoped>
.task-bar-time {
    font-size: 12px;
}

.date,
.time {
    text-align: right;
}
</style>