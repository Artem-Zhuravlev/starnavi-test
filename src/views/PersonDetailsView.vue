<template>
  <div class="container">
    <base-button
      @click="router.push('/')"
    >
      <v-icon name="fa-angle-left" />
      Home
    </base-button>
    <person-details
      :details="personDetails"
    />
    <person-details-flow
      :details="personDetails"
    />
  </div>
</template>

<script setup lang="ts">
import PersonDetailsFlow from '@/components/entities/people/PersonDetailsFlow.vue';
import PersonDetails from '@/components/entities/people/PersonDetails.vue';
import BaseButton from '@/components/shared/BaseButton.vue';
import type { IPersonDetails } from '@/interfaces/IPersonDetails';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPersonWithDetailsById } from '@/api/people';

const route = useRoute();
const router = useRouter();
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
