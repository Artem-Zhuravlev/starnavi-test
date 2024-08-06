import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseCardSkeleton from '@/components/shared/BaseCardSkeleton.vue'

describe('BaseCardSkeleton.vue', () => {
  it('renders all skeleton elements correctly', () => {
    const wrapper = mount(BaseCardSkeleton)

    const skeletonElements = wrapper.findAllComponents({ name: 'BaseSkeleton' })
    expect(skeletonElements.length).toBe(4)

    const imageSkeleton = wrapper.find('.card-skeleton__image')
    const titleSkeleton = wrapper.find('.card-skeleton__title')
    const subtitleSkeleton = wrapper.find('.card-skeleton__subtitle')

    expect(imageSkeleton.exists()).toBe(true)
    expect(titleSkeleton.exists()).toBe(true)
    expect(subtitleSkeleton.exists()).toBe(true)
  })
})
