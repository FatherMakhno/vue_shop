<script setup>
import CardList from "../components/CardList.vue";
import { useFakeStore } from "../stores/FakeStore.js";

import { onMounted } from "vue";

const { products, isLoading, loadProducts } = useFakeStore();
onMounted(async () => {
  loadProducts();
});
</script>

<template>
  <div class="top">
    <h2>Все товары</h2>
    <div class="filters">
      <select name="" class="">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
      </select>
    </div>
  </div>
  <CardList :items="products" />
</template>
