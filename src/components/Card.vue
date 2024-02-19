<script setup>
defineProps ({
  // FIXIT: Нет смысла передавать всё по отдельности, передавай в пропсы сразу item
    id: Number,
    image: String,
    title: String,
    price: Number
})

// FIXIT: ???
const s = 3;
</script>

<template>
    <div class="card">
      <!-- FIXIT: Используй либо параметр, либо параметры запроса -->
        <router-link :to="{name: 'Card', params: {id: id}, query: {id: id}}">
            <img :src="image" class="card_img">
        </router-link>
        <div class="card_title">{{ title }}</div>
        <div class="card_price"><b>Price:</b> {{ price }}</div>
        <button>Добавить в корзину</button>
    </div>
</template>

<style scoped>
/*  FIXIT: CSS использовать это нормально, но попробуй использовать SCSS */
    .card {
        margin: 10px auto;
        width: 85%;
        padding: 5px;
        border: 2px solid rgb(137, 158, 196);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card_img {
        display: block;
        height: 150px;
        overflow: hidden;
    }
    .card_title {
        width: 90%;
        margin-top: 8px;
        padding-top: 7px;
        border-top: 1px solid gray;
    }
</style>