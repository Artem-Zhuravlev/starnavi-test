<template>
  <navbar />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/widgets/Navbar.vue';
</script>

<style lang="scss">
#app {
  padding-bottom: var(--space-lg);
}
</style>
