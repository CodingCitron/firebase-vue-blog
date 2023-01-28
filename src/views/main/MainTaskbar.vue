<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useButtonStore } from '../../strores/button'
import { BUTTONS } from '@/data/init'

console.log(BUTTONS)

const props = defineProps({
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

const buttonStore = useButtonStore()
const { buttons } =  storeToRefs(buttonStore)

const leftTaskbar = computed(() => {
    return buttons.value.filter(button => 
        button['scope-component'].position === 'left'
    )
})

const centerTaskbar = computed(() => {
    return buttons.value.filter(button => 
        button['scope-component'].position === 'center'
    )
})

const rightTaskbar = computed(() => {
    return buttons.value.filter(button => 
        button['scope-component'].position === 'right'
    )
})
</script>
<template>
    <nav
        class="task-bar no-select"
        :class="position"
        :style="
            ` 
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
                :is="BUTTONS[item.name]"
                :config="item"
            >
            </component>
        </div>
        <div class="task-bar-center">
            <component 
                v-for="item in centerTaskbar"
                :is="BUTTONS[item.name]"
                :config="item"
            >
            </component>
        </div>
        <div class="task-bar-right">
            <component 
                v-for="item in rightTaskbar"
                :is="BUTTONS[item.name]"
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
    width: 100%;
    padding: 5px 12px;
    z-index: 100;
}

.task-bar-left,
.task-bar-center,
.task-bar-right{
    display: flex;
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