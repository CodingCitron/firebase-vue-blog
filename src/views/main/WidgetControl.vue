<script setup>
import { storeToRefs } from 'pinia'
import { ref, computed, defineAsyncComponent } from 'vue'
import { useWidgetStore } from '../../strores/widget'

const Widget = {
    Calender: defineAsyncComponent(() => import('../../components/Calender.vue'))
}

const widgetStore = useWidgetStore()
const { widgets } =  storeToRefs(widgetStore)

</script>
<template>
    <component 
        v-for="item in widgets"
        :is="Widget[item.name]"
        type="widget"
        :option="item.option"
    >
    </component>
</template>
<style scoped>
</style>