<script setup>
import welcomeImg from '../assets/imgs/img_0ffebbca1609474094.png'

</script>
<template>
    <div>
        <div class="img-container">
            <img :src="welcomeImg" alt="인사">
        </div>
        <h1>주임님들 새해 복 많이 받으세요 ~ !</h1>
    </div>
</template>
<style scoped>
.img-container {
    text-align: center;
}

img {
    width: 400px;
}

h1 {
    margin-top: 30px;
    text-align: center;
}
</style>