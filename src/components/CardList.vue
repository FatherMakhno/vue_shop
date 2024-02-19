<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="card_list">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :image="item.image"
      :title="item.title"
      :price="item.price"
    />
  </div>
</template>

<style scoped>
.card_list {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
