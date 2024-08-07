<template>
  <article class="card">
    <router-link
      :to="props.to"
      class="card__image"
    >
      <img
        :src="cardImage"
        :alt="props.title"
      >
    </router-link>
    <h3 class="card__title">{{ props.title }}</h3>
    <time
      class="card__time"
      :datetime="formatDate(props.date, FULL_DATE_FORMAT)"
    >
      <v-icon name='fa-regular-calendar-alt' />
      {{ formatDate(props.date) }}
    </time>
    <base-button
      @click="router.push(props.to)"
    >
      Show more
    </base-button>
  </article>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import { formatDate, FULL_DATE_FORMAT } from '@/utils/date';
import { computed } from 'vue';
import { useRouter } from 'vue-router'

const props = defineProps<{
  image?: string
  title: string
  date: string
  to: string
}>()

const router = useRouter()

const cardImage = computed(() => {
  return props.image ?? '/big-placeholder.jpg'
})
</script>

<style scoped lang="scss">
.card {
  min-width: calc(320px - (var(--space-md) * 2));
  border: 1px solid var(--color-gray);
  padding: var(--space-md);
  border-radius: var(--interface-size-sm);

  &__image {
    display: block;
    margin-bottom: var(--space-md);

    img {
      min-height: 320px;
      max-height: 320px;
      width: 100%;
      object-fit: cover;
      object-position: 50% 0;
    }
  }

  &__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__time {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
  }
}
</style>
