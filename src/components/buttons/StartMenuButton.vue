<script setup>
import { START_MENU_ICON } from '../services/Icon'

const props = defineProps({
    config: Object
})

</script>
<template>
    <button 
        class="task-button"
        @click="config.toggleHandler()"
        v-html="START_MENU_ICON"
    >
    </button>
</template>