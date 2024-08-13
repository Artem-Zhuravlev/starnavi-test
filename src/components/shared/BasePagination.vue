<template>
  <ul class="pagination">
    <li class="pagination__item">
      <base-button
        :disabled="isInFirstPage"
        @click="onClickPreviousPage">
        <v-icon
          name="fa-angle-left"
          data-testid="prev-icon" />
      </base-button>
    </li>
    <li v-for="page in pages"
        :key="page.name"
        class="pagination__item">
      <base-button
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
        :disabled="isInLastPage"
        class="pagination__btn"
        @click="onClickNextPage">
        <v-icon
          name="fa-angle-right"
          data-testid="next-icon" />
      </base-button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'

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
)

const emit = defineEmits<{
  (event: 'pageChanged', page: number): void
}>()

// Determine the start page for pagination based on current page and visible buttons.
const startPage = computed(() => {
  if (props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1
  }

  return props.currentPage - 1
})

// Calculate the end page for pagination, ensuring it does not exceed the total number of pages.
const endPage = computed(() => {
  return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages)
})

// Generate an array of page objects for pagination, marking the current page as disabled.
const pages = computed(() => {
  const range = []

  for (let i = startPage.value; i <= endPage.value; i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
})

// Check if the current page is the first page.
const isInFirstPage = computed(() => {
  return props.currentPage === 1
})

// Check if the current page is the last page.
const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages
})

// Emit an event to change the page when a page number is clicked.
const onClickPage = (page: number) => {
  emit('pageChanged', page)
}

// Check if the given page number is the current active page.
const isPageActive = (page: number) => {
  return props.currentPage === page
}

// Emit an event to go to the previous page.
const onClickPreviousPage = () => {
  emit('pageChanged', props.currentPage - 1)
}

// Emit an event to go to the next page.
const onClickNextPage = () => {
  emit('pageChanged', props.currentPage + 1)
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  list-style: none;
  align-items: center;
  padding-left: 0;
  margin-bottom: var(--space-lg);
}
</style>
