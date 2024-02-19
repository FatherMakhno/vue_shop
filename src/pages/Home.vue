<script setup>
    import CardList from '../components/CardList.vue'
    import axios from 'axios'

    import { onMounted, ref } from 'vue';

    const items = ref([])
  
    onMounted(async () => {
        try {
          /*
          * FIXIT: Подключи Pinia или VueX и вынеси это в стор, например catalogStore
          * в нём уже определи состояние, экшены и геттеры для работы с каталогом
          **/
        const { data } = await axios.get('https://fakestoreapi.com/products')
        items.value = data
        console.log(items.value)
        } catch (err) {
        console.log(err)
        }
    })
</script>

<template>
    <h2>Все товары</h2>
    <CardList :items="items"/>
</template>