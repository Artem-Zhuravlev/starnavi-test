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
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
      <base-card
        image='https://starwars-visualguide.com/assets/img/characters/2.jpg'
        title="Gold"
        date="2014-12-09T13:50:51.644000Z"
        to="/"
      />
      <base-card
        title="Gold"
        date="2014-12-09T13:50:51.644000Z"
        to="/"
      />
      <base-card-skeleton/>
    </div>
  </main>
</template>

<script setup lang="ts">
import BaseButton from '@/components/shared/BaseButton.vue'
import BasePagination from '@/components/shared/BasePagination.vue'
import BaseCard from '@/components/shared/BaseCard.vue';
import BaseCardSkeleton from '@/components/shared/BaseCardSkeleton.vue';
import { ref } from 'vue'

const isLoading = ref(false)
const currentPage = ref(1)

const onPageChange = (page: number) => {
  console.log(page)
  currentPage.value = page
}
</script>
