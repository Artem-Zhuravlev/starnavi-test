<template>
  <base-pagination
    :total-pages="totalPages"
    :total="total"
    :per-page="itemsPerPage"
    :current-page="currentPage"
    @page-changed="onPageChange"
  />
  <div class="row">
    <template v-if="isLoading">
      <div
        v-for="index in 10"
        :key="index"
        class="col-lg-4 col-md-6"
      >
        <base-card-skeleton />
      </div>
    </template>
    <template v-else>
      <div
        v-for="item in items"
        :key="item.id"
        class="col-lg-4 col-md-6"
      >
        <base-card
          :image="`${imageUrl}/characters/${item.id}.jpg`"
          :title="item.name"
          :date="item.created"
          :to="`/${item.id}`"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import BasePagination from '@/components/shared/BasePagination.vue';
import BaseCard from '@/components/shared/BaseCard.vue';
import BaseCardSkeleton from '@/components/shared/BaseCardSkeleton.vue';
import { imageUrl } from '@/api/axios';
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

onBeforeMount(() => {
  fetchPeople();
});
</script>
