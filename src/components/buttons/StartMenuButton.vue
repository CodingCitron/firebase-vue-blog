<script setup>
const props = defineProps({
    config: Object
})

</script>
<template>
    <button 
        class="task-button"
        @click="config.toggleHandler()"
    >
        <img src="https://img.icons8.com/fluent/24/000000/windows-11.png" alt="window-11-icon">
    </button>
</template>
<style scoped>
.task-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.task-button img {
    display: block;
    height: 28px;
}
</style>