import type { ComponentPublicInstance } from 'vue'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PersonDetailsFlow from '@/components/entities/people/PersonDetailsFlow.vue'
import { NodeType } from '@/components/shared/BaseFlow.vue'
import type { Node, Edge } from '@vue-flow/core'
import { personDetailsFlowMock } from '@/mocks/personDetailsFlowMock'

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver

describe('PersonDetailsFlow.vue', () => {
  it('renders BaseFlow with the correct nodes and edges', () => {
    const wrapper = mount(PersonDetailsFlow, {
      props: { details: personDetailsFlowMock }
    })

    // Type assertion for component instance
    const vm = wrapper.vm as unknown as {
      nodes: Node[]
      edges: Edge[]
      createEdge: (source: string, target: string) => Edge
    }

    const nodes = vm.nodes
    const edges = vm.edges

    expect(nodes).toHaveLength(3) // 1 person + 1 film + 1 starship
    expect(edges).toHaveLength(2) // 1 film connection + 1 starship connection

    // Check the first node (person node)
    expect(nodes[0].id).toBe('1')
    expect(nodes[0].type).toBe(NodeType.INPUT)
    expect(nodes[0].data.label).toBe('Luke Skywalker')

    // Check the film node
    expect(nodes[1].id).toBe('film1')
    expect(nodes[1].type).toBe(NodeType.DEFAULT)
    expect(nodes[1].data.label).toBe('A New Hope')

    // Check the starship node
    expect(nodes[2].id).toBe('x-wing')
    expect(nodes[2].type).toBe(NodeType.OUTPUT)
    expect(nodes[2].data.label).toBe('X-Wing')

    // Check the edges
    expect(edges[0].id).toBe('e1->film1') // connection between person and the film
    expect(edges[1].id).toBe('efilm1->x-wing') // connection between the film and the starship
  })

  it('handles cases where details are not provided', () => {
    const wrapper = mount(PersonDetailsFlow, {
      props: { details: null as any }
    })

    // Type assertion for component instance
    const vm = wrapper.vm as unknown as {
      nodes: Node[]
      edges: Edge[]
      createEdge: (source: string, target: string) => Edge
    }

    expect(vm.nodes).toHaveLength(0)
    expect(vm.edges).toHaveLength(0)
  })

  it('throws an error if createEdge is called with undefined source or target', () => {
    const wrapper = mount(PersonDetailsFlow, {
      props: { details: personDetailsFlowMock }
    })

    // Type assertion for component instance
    const vm = wrapper.vm as unknown as {
      nodes: Node[]
      edges: Edge[]
      createEdge: (source: string, target: string) => Edge
    }

    const createEdge = vm.createEdge

    expect(() => createEdge(undefined as any, 'target')).toThrow(
      'Both source and target must be defined.'
    )
    expect(() => createEdge('source', undefined as any)).toThrow(
      'Both source and target must be defined.'
    )
  })
})
