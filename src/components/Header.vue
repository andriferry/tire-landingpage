<script setup>
import { ref } from 'vue';
import closeImg from '@/assets/close.svg' // => or relative path
import menuImg from '@/assets/menu.svg' // => or relative path


const menu = ref(
  [
    {
      text: 'home',
      routeName: 'home'
    },
    {
      text: 'vehicle',
      routeName: 'vehicle'
    },
    {
      text: 'tires',
      routeName: 'tires'
    },
    {
      text: 'wheels',
      routeName: 'wheels'
    },  
    {
      text: 'hardware',
      routeName: 'hardware'
    },
    {
      text: 'calculators',
      routeName: 'calculators'
    },
     {
      text: 'account',
      routeName: 'account'
    }
  ]
);

const openMenu = ref(false);
</script>

<template>
<div class="d-flex flex-column">
  <div class="p-3 w-100 d-block d-lg-none">
    <div class="w-100 pb-3 border-bottom">
      <button data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" class="menu-btn" @click="openMenu = !openMenu">
        <img :src="openMenu ? closeImg : menuImg" alt="">
      </button>
    </div>

    <div class="list-group list-group-flush collapse" id="collapseExample">
      <RouterLink v-for="(route, index) in menu" :key="index" :to="{name: route.routeName}" class="text-uppercase menulink list-group-item">
         {{route.text}}
      </RouterLink>
    </div>

  </div>
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

      <button type="button" class="checkout-btn d-flex px-2 py-1">
         <img src="@/assets/cart.svg" alt="">
        <span class="fw-bold flex-grow-1">VIEW CART (10)</span>
      </button>
    </div>
  </nav>

  <div class="menu d-none w-100 d-lg-flex justify-content-center gap-2" style="background: #F6F6F6">
    <RouterLink v-for="(route, index) in menu" :key="index" :to="{name: route.routeName}" class="text-uppercase menulink">
      {{route.text}}
    </RouterLink>
  </div>
</div>
</template>


<style scoped>
a {
  text-decoration: none;
}

.menulink {
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.1px;
  color: #000000;
}

.menu-btn {
  border: none;
  background: transparent;
}

a.router-link-active {
  font-weight: 900;
  color: #2BACE3;
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
