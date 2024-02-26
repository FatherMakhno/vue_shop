<script setup>
defineProps({
  item: Object,
  required: true,
});

const s = 3;
</script>

<template>
  <div class="card">
    <router-link :to="{ name: 'Card', params: { id: item.id } }">
      <img :src="item.image" class="card_img" />
    </router-link>
    <div class="card_title">{{ item.title }}</div>
    <div class="card_price"><b>Price:</b> {{ item.price }}</div>
    <button>Добавить в корзину</button>
  </div>
</template>

<style scoped>
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
