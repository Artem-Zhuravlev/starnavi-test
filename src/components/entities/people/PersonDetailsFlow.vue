<template>
  <base-flow
    :nodes="nodes"
    :edges="edges"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { generateRandomPosition } from '@/utils/flow-position';
import type { Node, Edge } from '@vue-flow/core';
import type { IPersonDetails } from '@/interfaces/IPersonDetails';
import BaseFlow, { NodeType } from '@/components/shared/BaseFlow.vue';

const props = defineProps<{
  details: IPersonDetails;
}>();

// Function to create a node
function createNode(id: string | number, type: string, label: string, positionOffset: number): Node {
  return {
    id: id.toString(),
    type,
    position: generateRandomPosition(positionOffset),
    data: { label },
  };
}

// Computed property for nodes
const nodes = computed<Node[]>(() => {
  const details = props.details;

  if (!details) return [];

  const nodesArray: Node[] = [
    createNode(details.id, NodeType.INPUT, details.name, 50),
  ];

  details.films.forEach((film) => {
    const filmNode = createNode(film.slug, NodeType.DEFAULT, film.title, 150);
    nodesArray.push(filmNode);

    film.starships.forEach((starship) => {
      const starshipNode = createNode(starship.slug, NodeType.OUTPUT, starship.name, 250);
      nodesArray.push(starshipNode);
    });
  });

  return nodesArray;
});

// Function to create an edge
function createEdge(source: string, target: string): Edge {
  if (source === undefined || target === undefined) {
    throw new Error("Both source and target must be defined.");
  }

  return {
    id: `e${source}->${target}`,
    source: source.toString(),
    target: target.toString(),
  };
}

// Computed property for edges
const edges = computed<Edge[]>(() => {
  const details = props.details;

  if (!details) return [];

  return details.films.flatMap((film) => {
    const filmEdge = createEdge(details.id, film.slug);

    const starshipEdges = film.starships.map((starship) =>
      createEdge(film.slug, starship.slug)
    );

    return [filmEdge, ...starshipEdges];
  });
});
</script>
