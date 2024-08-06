// Skeleton.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseSkeleton from '@/components/shared/BaseSkeleton.vue'

describe('BaseSkeleton.vue', () => {
  it('renders with correct width and height', () => {
    const wrapper = mount(BaseSkeleton, {
      props: {
        width: '100px',
        height: '50px'
      }
    })

    const skeleton = wrapper.find('.skeleton')
    const style = getComputedStyle(skeleton.element)

    expect(style.width).toBe('100px')
    expect(style.height).toBe('50px')
  })
})
