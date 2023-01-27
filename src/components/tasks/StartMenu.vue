<script setup>
const props = defineProps({
    config: Object
})

console.log(props.config)

</script>
<template>
    <div 
        class="theme-light start-menu"
        v-show="config.toggle"
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