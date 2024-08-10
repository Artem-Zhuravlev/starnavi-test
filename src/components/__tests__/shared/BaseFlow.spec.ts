import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseFlow from '@/components/shared/BaseFlow.vue'
import { NodeType } from '@/components/shared/BaseFlow.vue'
import type { Node, Edge } from '@vue-flow/core'

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver

describe('BaseFlow.vue', () => {
  const nodes: Node[] = [
    { id: '1', type: NodeType.INPUT, data: { label: 'Input Node' }, position: { x: 0, y: 0 } },
    {
      id: '2',
      type: NodeType.DEFAULT,
      data: { label: 'Default Node' },
      position: { x: 100, y: 100 }
    },
    { id: '3', type: NodeType.OUTPUT, data: { label: 'Output Node' }, position: { x: 200, y: 200 } }
  ]

  const edges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' }
  ]

  it('applies correct zoom settings', () => {
    const wrapper = mount(BaseFlow, {
      props: {
        nodes,
        edges
      }
    })

    const vueFlow = wrapper.findComponent({ name: 'VueFlow' })
    const viewport = vueFlow.props('defaultViewport')

    expect(viewport.zoom).toBe(1.2)
    expect(vueFlow.props('minZoom')).toBe(0.2)
    expect(vueFlow.props('maxZoom')).toBe(4)
  })
})
