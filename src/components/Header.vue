<script setup>
import { ref } from 'vue';

const menu = ref(
  [
    {
      text: 'home',
      link
    }
  ]
);
</script>

<template>
<div class="d-flex flex-column">
  <nav class="w-100 d-flex justify-content-between align-items-center p-3">
    <div class="d-flex gap-2 align-items-center">
      <img src="@/assets/logo.svg" alt="">

      <p class="mb-0 fw-bolder h5">
        (905) 793-1881
      </p>
    </div>


    <div class="d-flex rounded-2 card-checkout flex-column gap-2 p-4">
      <p class="mb-0">DYNAMIC MOTOR SPORTS INC</p>

      <div class="d-flex align-items-center gap-2">
        <a href="#" class="checkout-link mb-0">
          VIEW ACCOUNT
        </a>
        |
        <a href="#" class="checkout-link mb-0">
          SIGN OUT
        </a>
      </div>

      <button type="button" class="checkout-btn d-flex p-1">
         <img src="@/assets/cart.svg" alt="">
        <span class="fw-bold flex-grow-1">VIEW CART (10)</span>
      </button>
    </div>
  </nav>

  <div class="menu w-100 d-flex justify-content-center gap-2" style="background: #F6F6F6">
    <a href="#"> hello</a>
  </div>
</div>
</template>


<style scoped>
a {
  text-decoration: none;
}
.card-checkout {
  width: 320px;
  background: #F6F6F6;
}

.card-checkout  p {
  font-size: 12px;
}

.checkout-link {
  text-decoration: none;
  font-size: 12px;
  color: #00A6EB
}

.checkout-btn {
  background-color: #27AE60;
  color: white; 
  border-radius: 5px;
  border: none;
}

.checkout-btn span {
  font-size: 14px;
}
</style>
