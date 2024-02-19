<script setup>
    import { computed, onMounted, ref } from 'vue';
    import axios from 'axios'
    import { useRoute } from 'vue-router';
    
    //const id = computed(() => this.$route.params.id)
    // defineProps ({
    //     id: Number
    // })

    const route = useRoute();
    const id = ref(route.params.id);

    const items = ref([])

    onMounted(async () => {
        try {
          /*
          * FIXIT: Подключи Pinia или VueX и вынеси это в стор, например productStore
          * в нём уже определи состояние, экшены и геттеры для работы с данными продукта
          **/
        const { data } = await axios.get('https://fakestoreapi.com/products/' + id.value)
        items.value = data
        console.log(items.value)
        } catch (err) {
        console.log(err)
        }
    })
</script>

<template>
    <div class="card_title">Title {{ items.title }}</div>
    <img :src="items.image" class="card_img">
    <div class="card_descr"><b>Description:</b> {{ items.description }}</div>
    <div class="card_price"><b>Price:</b> {{ items.price }}</div>
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