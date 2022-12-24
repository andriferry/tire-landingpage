<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
body {
  font-family: 'Nunito Sans', sans-serif;
}
</style>