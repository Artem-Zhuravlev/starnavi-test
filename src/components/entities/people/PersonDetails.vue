<template>
  <div
    v-if="props.details"
    class="person-details"
  >
    <img
      class="person-details__img"
      :src="characterImageUrl"
      alt="">
    <ul class="person-details__list">
      <li><b>Name: </b>{{ props.details.name }}</li>
      <li><b>Height: </b>{{ props.details.height }}</li>
      <li><b>Mass: </b>{{ props.details.mass }}</li>
      <li><b>Hair color: </b>{{ props.details.hair_color }}</li>
      <li><b>Skin color: </b>{{ props.details.skin_color }}</li>
      <li><b>Eye color: </b>{{ props.details.eye_color }}</li>
      <li><b>Gender: </b>{{ props.details.gender }}</li>
    </ul>
  </div>
  <person-details-skeleton
    v-else
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PersonDetailsSkeleton from './PersonDetailsSkeleton.vue';
import { imageUrl } from '@/api/axios';

const props = defineProps<{
  details: {
    id: string,
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    gender: string,
  } | null
}>()
const characterImageUrl = computed(() => {
  return props.details ? `${imageUrl}/characters/${props.details.id}.jpg` : '';
});
</script>

<style scoped lang="scss">
.person-details {
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
