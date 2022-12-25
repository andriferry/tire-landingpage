<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
<div class="main">
   <Header />

  <main class="mt-5 article">
    <RouterView />
  </main>

  <Footer class="footer" />
</div>
</template>

<style scoped>
body {
  font-family: 'Nunito Sans', sans-serif;
}


.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.article {
  flex: 1;
}


</style>