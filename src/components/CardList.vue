<script setup>
    import Card from './Card.vue'
    defineProps({
      // FIXIT: items либо обязательный, либо задай ему значение по-умолчанию
        items: Array
    })
</script>

<template>
  <!--
  FIXIT: Если у тебя items == null, то оно упадёт. Проверь, что items это массив и он не пустой,
  иначе можешь вывести, что товаров нет
  -->
    <div class="card_list">
      <!-- FIXIT: Нет смысла передавать всё по отдельности, передавай в пропсы сразу item -->
      <Card v-for="item in items" :key="item.id" :id="item.id" :image="item.image" :title="item.title" :price="item.price"/>
    </div>
</template>

<style scoped>
.card_list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%
}

</style>