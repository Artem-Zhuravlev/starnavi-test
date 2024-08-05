<template>
  <button
    type="button"
    class="base-button"
    :disabled="props.loading"
  >
    <v-icon
      v-if="props.loading"
      data-testid="spinner"
      class="base-button__spinner"
      name="fa-spinner"
    />
    <slot  />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean
}>()
</script>

<style scoped lang="scss">
.base-button {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  color: var(--color-text);
  background-color: var(--color-primary);
  cursor: pointer;
  border: none;
  font-size: var(--font-size-main);
  transition: var(--transition-base) background-color;

  &:hover {
    background-color: var(--color-primary-hover);
  }

  &:focus {
    background-color: var(--color-primary-focus);
  }

  &[disabled] {
    color: var(--color-text-disabled);
    background-color: var(--color-disabled);
    cursor: auto;
  }


  &__spinner {
    transform-origin: 50%;
    animation: spinner 1s linear infinite;
  }
}
</style>
