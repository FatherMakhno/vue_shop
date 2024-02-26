<script setup>
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useFakeStore } from "../stores/FakeStore.js";

const route = useRoute();
const id = ref(route.params.id);

const { products, isLoading, loadProducts } = useFakeStore();
onMounted(async () => {
  const id = ref(route.params.id);
  if (id.value) {
    loadProducts(id.value);
  }
});
</script>

<template>
  <div class="card_title">{{ products.title }}</div>
  <img :src="products.image" class="card_img" />
  <div class="card_descr"><b>Description:</b> {{ products.description }}</div>
  <div class="card_price"><b>Price:</b> {{ products.price }}</div>
</template>

<style scoped>
* {
  margin-top: 20px;
  font-size: 20px;
}
.card_title {
  font-weight: 600;
  font-size: 24px;
}
img {
  display: block;
  margin: 10px auto;
  width: 40%;
}
</style>
