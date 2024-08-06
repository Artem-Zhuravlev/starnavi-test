<template>
  <div class='card-skeleton'>
    <base-skeleton
      class="card-skeleton__image"
      width="100%"
      height="320px"
    />
    <base-skeleton
      class="card-skeleton__title"
      width="100%"
      height="38px"
    />
    <base-skeleton
      class="card-skeleton__subtitle"
      width="110px"
      height="22px"
    />
    <base-skeleton
      width="120px"
      height="39px"
    />
  </div>
</template>

<script setup lang="ts">
import BaseSkeleton from './BaseSkeleton.vue';

</script>

<style scoped lang="scss">
.card-skeleton {
  max-width: 300px;
  border: 1px solid var(--color-gray);
  padding: var(--space-md);
  border-radius: var(--interface-size-sm);

  &__image {
    margin-bottom: var(--space-md);
  }

  &__title {
    margin-bottom: var(--space-md);
  }

  &__subtitle {
    margin-bottom: var(--space-md);
  }
}
</style>
