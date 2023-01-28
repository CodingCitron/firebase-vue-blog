<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../strores/task'
import { TASKS } from '@/data/init'

const taskStore = useTaskStore()
const { tasks } =  storeToRefs(taskStore)

</script>
<template>
    <component 
        v-for="item in tasks"
        :is="TASKS[item.name]"
        :config="item"
    >
    </component>
</template>
<style scoped>
.white {
    color: white;
}
</style>