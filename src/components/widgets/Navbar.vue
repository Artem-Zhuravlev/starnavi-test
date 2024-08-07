<template>
  <nav class="navbar container-fluid">
    <router-link class='navbar__logo'>
      <img
        src="/sw-logo.png"
        alt="Star wars logo"
      >
    </router-link>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'>
.navbar {
  display: flex;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-primary);
  &__logo {
    display: inline-flex;
    max-width: 100px;
  }
}
</style>
