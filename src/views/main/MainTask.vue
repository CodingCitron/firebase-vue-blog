<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../strores/task'
import { TASKS } from '../../data/init'

const taskStore = useTaskStore()
const { taskButtons } =  storeToRefs(taskStore)
</script>
<template>
    <component 
        v-for="item in taskButtons"
        :is="TASKS[item.name]"
        :config="item"
    >
    </component>
</template>
<style scoped>
</style>