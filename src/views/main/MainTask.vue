<script setup>
import { storeToRefs } from 'pinia'
import { useTaskbarStore } from '../../strores/taskbar'
import { TASKS } from '../../data/init'

const taskbarStore = useTaskbarStore()
const { taskbarButtons } =  storeToRefs(taskbarStore)
</script>
<template>
    <component 
        v-for="item in taskbarButtons"
        :is="TASKS[item.name]"
        :config="item"
    >
    </component>
</template>
<style scoped>
</style>