<template>
  <main>
    {{ isLoading }}
    <BaseButton :loading="isLoading">
      Home page
    </BaseButton>
    <BaseButton @click="isLoading = !isLoading">Click</BaseButton>
  </main>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue';
import { ref } from 'vue';

const isLoading = ref(false);
</script>
