<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheTopbar from './components/TheTopbar.vue';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

</script>

<template>
  <div class="container  mx-auto">
    <!-- * TopBar -->
    <TheTopbar />
    <!-- * Navigation -->
    <TheNavbar />

    <!-- * Pages -->
    <RouterView />

    <!-- * Footer -->
    <TheFooter />
  </div>
</template>