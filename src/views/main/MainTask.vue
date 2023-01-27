<script setup>
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../../strores/task'

const taskStore = useTaskStore()
const { tasks } =  storeToRefs(taskStore)
</script>
<template>
    <component 
        v-for="item in tasks"
        :is="item.component"
        :config="item"
    >
    </component>
</template>
<style scoped>
.white {
    color: white;
}
</style>