<script setup>
import { storeToRefs } from 'pinia'
import { ref, computed, defineAsyncComponent } from 'vue'
import { useTaskbarStore } from '../../strores/taskbar'

const taskbarStore = useTaskbarStore()
const { taskbarButtons } =  storeToRefs(taskbarStore)

const TASKBAR_BUTTONS = {}

taskbarButtons.value.forEach(obj => {
    const name = obj.name
    TASKBAR_BUTTONS[name] = defineAsyncComponent(() => import(`../../components/taskbars/${name}.vue`))
})

</script>
<template>
    <component 
        v-for="item in taskbarButtons"
        :is="TASKBAR_BUTTONS[item.name]"
        type="widget"
        :config="item"
    >
    </component>
</template>
<style scoped>
</style>