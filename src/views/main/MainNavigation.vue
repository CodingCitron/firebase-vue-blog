<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useWidgetStore } from '../../strores/widget'

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

const Widget = {
    Calender: defineAsyncComponent(() => import('../../components/Calender.vue'))
}

const widgetStore = useWidgetStore()
const { widgets } =  storeToRefs(widgetStore)

const leftWidgets = computed(() => 
    widgets.value.filter(widget => widget['nav-position'] === 'left')
)

const centerWidgets = computed(() => 
    widgets.value.filter(widget => widget['nav-position'] === 'center')
)

const rightWidgets = computed(() => 
    widgets.value.filter(widget => widget['nav-position'] === 'right')
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
                v-for="item in leftWidgets"
                :is="Widget[item.name]"
            >
            </component>
        </div>
        <div class="task-bar-center">
            <component 
                v-for="item in centerWidgets"
                :is="Widget[item.name]"
            >
            </component>
        </div>
        <div class="task-bar-right">
            <component 
                v-for="item in rightWidgets"
                :is="Widget[item.name]"
                @widgetClick="e =>  item.click.call(item, e)"
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
    padding: 5px;
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