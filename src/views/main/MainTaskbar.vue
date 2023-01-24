<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../strores/task'
import { TASKBAR_BUTTONS } from '../../data/init'

const props = defineProps({
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '45px'
    },
    backgroundColor: {
        type: String,
        default: 'rgba(255, 255, 255, 0.525)'
    },
    opacity: {
        type: String,
        default: '1'
    },
    position: {
        type: String,
        default: 'bottom'
    },
    filter: {
        type: String,
        default: 'saturate(180%) blur(10px)'
    }
})

const taskStore = useTaskStore()
const { taskbarButtons } =  storeToRefs(taskStore)

const leftTaskbar = computed(() => 
    taskbarButtons.value.filter(button => button['nav-position'] === 'left')
)

const centerTaskbar = computed(() => 
    taskbarButtons.value.filter(button => button['nav-position'] === 'center')
)

const rightTaskbar = computed(() => 
    taskbarButtons.value.filter(button => button['nav-position'] === 'right')
)
</script>
<template>
    <nav
        class="task-bar no-select"
        :class="position"
        :style="
            `width: ${width}; 
            height: ${height}; 
            background: ${backgroundColor};
            opacity: ${opacity};
            backdrop-filter: ${filter};
            `
                "
    >
        <div class="task-bar-left">
            <component 
                v-for="item in leftTaskbar"
                :is="TASKBAR_BUTTONS[item.name]"
                :config="item"
            >
            </component>
        </div>
        <div class="task-bar-center">
            <component 
                v-for="item in centerTaskbar"
                :is="TASKBAR_BUTTONS[item.name]"
                :config="item"
            >
            </component>
        </div>
        <div class="task-bar-right">
            <component 
                v-for="item in rightTaskbar"
                :is="TASKBAR_BUTTONS[item.name]"
                @taskbarButtonClick="e =>  item.click.call(item, e)"
                :config="item"
            >
            </component>
        </div>
    </nav>
</template>
<style scoped>
.task-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 12px;
    z-index: 100;
}

.task-bar.bottom {
    bottom: 0;
}

.task-bar.top {
    top: 0;
}

.task-bar.left {
    left: 0;
}

.task-bar.right {
    right: 0;
}
</style>