<template>
    
    <div class="header">
      <router-link to="/">
      <div class="logo">
        <img src="/shop-icon.png" alt="logo" class="logo_img">
        <h1>Барахолка</h1>
      </div>
      </router-link>
      <div class="cart">
        <img src="/cart.png" alt="" class="cart_img">
        <div class="cart_text">Корзина</div>
      </div>
    </div>
    
</template>

<style scoped>
/*  FIXIT: CSS использовать это нормально, но попробуй использовать SCSS */
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo_img {
        height: 65px;
        width: auto;
    }
    h1 {
        margin-left: 20px;
        color: black;
        text-decoration: none;
    }
    .cart {
        display: flex;
        align-items: center;
    }
    .cart_img {
        width: 26px;
        height: auto;
    }
    .cart_text {
        margin-left: 10px;
        font-size: 22px;
    }
    .cart_text:hover {
        font-weight: 600;
    }
</style>