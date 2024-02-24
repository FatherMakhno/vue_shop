import {defineStore} from "pinia";
import {computed, ref} from "vue";


export const useProductsStore = defineStore('products', () => {
    const products = ref([]);
    const isLoading = ref(false);

    const loadProducts = async () => {
        // get products
    }

    return {
        products: computed(() => products),
        isLoading: computed(() => isLoading),

        loadProducts
    };
})