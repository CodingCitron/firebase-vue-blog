<script setup>
const props = defineProps({
    config: Object
})

</script>
<template>
    <div 
        class="theme-light start-menu"
        v-show="config.toggle"
        v-click-outside="config.outSideClick.bind(config)"
        :style="config.style"
    >
        <div class="search-bar-container">
            <input />
        </div>
        <div class="apps-container">
            {{ config }}
        </div>
    </div>
</template>