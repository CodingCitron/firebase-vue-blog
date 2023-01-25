<script setup>
const props = defineProps({
    config: Object
})

</script>
<template>
    <div 
        class="theme-light start-menu" 
        :style="config.style"
    >
        {{ config }}
    </div>
</template>
<style scoped>
.start-menu {
    position: absolute;
    border-radius: 4px;
}
</style>