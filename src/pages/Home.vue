<script setup>
import CardList from "../components/CardList.vue";
import axios from "axios";

import { onMounted, ref } from "vue";

const items = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    items.value = data;
    console.log(items.value);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <h2>Все товары</h2>
  <CardList :items="items" />
</template>
