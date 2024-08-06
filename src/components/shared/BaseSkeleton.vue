<template>
  <div
    class="skeleton"
    :style="{
      width: props.width,
      height: props.height
    }"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  width: string
  height: string
}>()
</script>

<style scoped lang="scss">
.skeleton {
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, .5) 50%,
    rgba(255, 255, 255, 0) 60%
  ) var(--color-gray);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
  border-radius: var(--interface-size-sm);
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

</style>
