<template>
  <div class="container">
    <person-details-flow
      :details="personDetails"
    />
  </div>
</template>

<script setup lang="ts">
import PersonDetailsFlow from '@/components/entities/people/PersonDetailsFlow.vue';
import type { IPersonDetails } from '@/interfaces/IPersonDetails';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPersonWithDetailsById } from '@/api/people';

const route = useRoute();
const userId = route.params.id as string;
const personDetails = ref<IPersonDetails | null>(null);

onBeforeMount(async () => {
  try {
    const data = await getPersonWithDetailsById(userId);
    personDetails.value = data as IPersonDetails;
  } catch (error) {
    console.error('Failed to fetch person details:', error);
  }
});
</script>
