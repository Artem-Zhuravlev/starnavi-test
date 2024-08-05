<template>
  <ul class="pagination">
    <li
      class="pagination__item"
    >
      <base-button
        type="button"
        :disabled="isInFirstPage"
        @click="onClickPreviousPage"
      >
        <v-icon name="fa-angle-left" />
      </base-button>
    </li>
    <li
      v-for="page in pages"
      :key="page.name"
      class="pagination__item"
    >
      <base-button
        type="button"
        :disabled="page.isDisabled"
        class="pagination__btn"
        :active="isPageActive(page.name)"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </base-button>
    </li>

    <li class="pagination__item">
      <base-button
        type="button"
        :disabled="isInLastPage"
        class="pagination__btn"
        @click="onClickNextPage"
      >
        <v-icon name="fa-angle-right" />
      </base-button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from './BaseButton.vue';

const props = withDefaults(
  defineProps<{
    maxVisibleButtons?: number
    currentPage: number
    perPage: number
    total: number
    totalPages: number
  }>(),
  {
    maxVisibleButtons: 3
  }
);

const emit = defineEmits<{
  (event: 'pagechanged', page: number): void
}>();

const startPage = computed(() => {
  if (props.currentPage === 1) { return 1 }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1;
  }

  return props.currentPage - 1;
});

const endPage = computed(() => {
  return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
})

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= endPage.value; i+= 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    })
  }

  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
})

const onClickPage = (page: number) => {
  emit('pagechanged', page);
}

const isPageActive = (page: number) => {
  return props.currentPage === page
}

const onClickPreviousPage = () => {
  emit('pagechanged', props.currentPage - 1);
}

const onClickNextPage = () => {
  emit('pagechanged', props.currentPage + 1);
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  list-style: none;
  align-items: center;
}
</style>
