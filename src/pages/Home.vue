<script setup>
import CardList from "../components/CardList.vue";
import { useFakeStore } from "../stores/FakeStore.js";

import { onMounted } from "vue";

const { products, isLoading, loadProducts } = useFakeStore();
onMounted(async () => {
  loadProducts();
});

const onChangeSelect = (event) => {
  loadProducts("?sort=" + event.target.value);
};
</script>

<template>
  <div class="top">
    <h2>Все товары</h2>
    <div class="filters">
      <select @change="onChangeSelect">
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
      <form action=""></form>
    </div>
  </div>
  <CardList :items="products" />
</template>

<style scoped>
h2 {
  font-size: 26px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  margin-right: 20px;
  font-size: 16px;
  padding: 3px;
}
</style>
