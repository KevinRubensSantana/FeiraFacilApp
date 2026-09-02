<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <div class="app">
     <AppHeader />

     <div class="app-content">
       <RouterView />
     </div>
  </div>
</template>
