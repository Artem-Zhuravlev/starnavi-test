<template>
  <main>
    {{ isLoading }}
    <BaseButton :loading="isLoading"> Home page </BaseButton>
    <BaseButton @click="isLoading = !isLoading">Click</BaseButton>
    <BasePagination
      :total-pages="11"
      :total="113"
      :per-page="10"
      :current-page="currentPage"
      @page-changed="onPageChange"
    />
  </main>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue'
import BasePagination from '@/components/shared/BasePagination.vue'
import { ref } from 'vue'

const isLoading = ref(false)
const currentPage = ref(1)

const onPageChange = (page: number) => {
  console.log(page)
  currentPage.value = page
}
</script>
