<template>
  <div class="person-details-skeleton">
    <base-skeleton
      class="person-details-skeleton__img"
      width="200px"
      height="275px"
    />
    <ul class="person-details-skeleton__list">
      <li
        v-for="item in 7"
        :key="item"
      ><base-skeleton
        width="50%"
        height="22px"
      /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import BaseSkeleton from '@/components/shared/BaseSkeleton.vue';
</script>

<style scoped lang="scss">
.person-details-skeleton {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  margin-top: var(--space-lg);
  @media(max-width: 576px) {
    grid-template-columns: 1fr;
  }

  &__img {
    max-width: 300px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
}

</style>
