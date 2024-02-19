<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="main">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  background-color: rgb(246, 255, 255);
  width: 90%;
  margin: 40px auto;
  padding: 10px 20px;
  border-radius: 7px;
}
</style>
