import { defineStore } from "pinia";
import axios from "axios";
import { onMounted, ref, computed } from "vue";

export const useFakeStore = defineStore("products", () => {
  const products = ref([]);
  const isLoading = ref(false);

  const loadProducts = async (value) => {
    try {
      if (value == undefined) {
        var response = await axios.get("https:/fakestoreapi.com/products");
      } else {
        var response = await axios.get(
          "https://fakestoreapi.com/products/" + value
        );
      }
      products.value = response.data;
    } catch (err) {
      products.value = response;
      console.log(err);
    }
  };

  return {
    products: computed(() => products),
    isLoading: computed(() => isLoading),

    loadProducts,
  };
});
