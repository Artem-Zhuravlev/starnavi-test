import { mount } from '@vue/test-utils'
import { formatDate, FULL_DATE_FORMAT } from '@/utils/date'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, vi } from 'vitest'
import { nextTick } from 'vue'
import BaseCard from '@/components/shared/BaseCard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/some-path',
      component: { template: '<div />' }
    }
  ]
})

const mountComponent = (props = {}) => {
  return mount(BaseCard, {
    global: {
      plugins: [router]
    },
    props: {
      title: 'Test Title',
      date: '2024-08-06',
      to: '/some-path',
      ...props
    }
  })
}

describe('BaseCard.vue', () => {
  it('renders correctly with required props', async () => {
    const wrapper = mountComponent()

    expect(wrapper.find('.card__title').text()).toBe('Test Title')
    expect(wrapper.find('.card__time').text()).toContain(formatDate('2024-08-06'))
    expect(wrapper.find('img').attributes('src')).toBe('/big-placeholder.jpg')
  })

  it('renders image when image prop is provided', async () => {
    const wrapper = mountComponent({ image: '/some-image.jpg' })

    expect(wrapper.find('img').attributes('src')).toBe('/some-image.jpg')
  })

  it('navigates to the correct route on button click', async () => {
    const push = vi.fn()
    router.push = push

    const wrapper = mountComponent()

    await wrapper.find('button').trigger('click')
    await nextTick()

    expect(push).toHaveBeenCalledWith('/some-path')
  })

  it('formats the date correctly', async () => {
    const wrapper = mountComponent()

    expect(wrapper.find('time').attributes('datetime')).toBe(
      formatDate('2024-08-06', FULL_DATE_FORMAT)
    )
  })
})
