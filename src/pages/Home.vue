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
  <h2>Все товары</h2>
  <CardList :items="products" />
</template>
