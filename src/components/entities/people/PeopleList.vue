<template>
  <main>
    <div class="container">
      <base-pagination
        :total-pages="totalPages"
        :total="total"
        :per-page="itemsPerPage"
        :current-page="currentPage"
        @page-changed="onPageChange"
      />
      <div class="grid">
        <template v-if="isLoading">
          <base-card-skeleton
            v-for="index in 10"
            :key="index"
          />
        </template>
        <template v-else>
          <base-card
            v-for="item in items"
            :key="item.id"
            :image="`${imageUrl}/characters/${item.id}.jpg`"
            :title="item.name"
            :date="item.created"
            :to="`/${item.id}`"
          />
        </template>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BasePagination from '@/components/shared/BasePagination.vue';
import BaseCard from '@/components/shared/BaseCard.vue';
import BaseCardSkeleton from '@/components/shared/BaseCardSkeleton.vue';
import { imageUrl } from '@/api/people';
import { usePeople } from '@/hooks/usePeople';

const {
  isLoading,
  currentPage,
  total,
  itemsPerPage,
  items, totalPages,
  fetchPeople,
  onPageChange
} = usePeople();

onMounted(() => {
  fetchPeople();
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>
