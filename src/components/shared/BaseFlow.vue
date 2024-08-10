<template>
  <vue-flow
    class="base-flow"
    :nodes="props.nodes"
    :edges="props.edges"
    :default-viewport="{ zoom: 1.2 }"
    :min-zoom="0.2"
    :max-zoom="4"
  />
</template>

<script lang="ts">
export enum NodeType {
  INPUT = 'input',
  DEFAULT = 'default',
  OUTPUT = 'output',
}
</script>

<script setup lang="ts">
import type { Node, Edge } from '@vue-flow/core';
import { VueFlow } from '@vue-flow/core';

// Define your nodes and edges data
const props = defineProps<{
  nodes: Node[];
  edges: Edge[];
}>();

</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

.base-flow {
  min-height: 400px;
  width: 100%;
  border: 2px solid var(--color-secondary);
  background-color: var(--color-light-gray);
}
</style>
