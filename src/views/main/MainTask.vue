<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../strores/task'
import { TASKS } from '../../data/init'

const taskStore = useTaskStore()
const { taskbarButtons } =  storeToRefs(taskStore)
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