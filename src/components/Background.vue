<script setup>
const props = defineProps({
    path: String
})
</script>
<template>
    <div 
        class="background"
        :style="`background: no-repeat url(${path}); 
                background-size: cover;
                background-position: center;
                `"
    >
        <slot></slot>
    </div>
</template>
<style scoped>
.background {
    min-height: 100vh;
}
</style>