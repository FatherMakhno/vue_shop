<script setup>
import Card from "./Card.vue";
import { ref } from "vue";

defineProps({
  items: Object,
  required: true,
});
</script>

<template>
  <div v-if="items !== undefined" class="card_list">
    <Card v-for="item in items" :key="item.id" :item="item" />
  </div>
  <div v-else>Товаров нет</div>
</template>

<style scoped>
.card_list {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
