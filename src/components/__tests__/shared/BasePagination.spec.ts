import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BasePagination from '@/components/shared/BasePagination.vue'
import BaseButton from '@/components/shared/BaseButton.vue'

describe('BasePagination.vue', () => {
  const mountComponent = (props = {}) => {
    return mount(BasePagination, {
      global: {
        components: {
          BaseButton
        }
      },
      props: {
        currentPage: 1,
        perPage: 10,
        total: 100,
        totalPages: 10,
        ...props
      }
    })
  }

  it('renders correctly with default props', () => {
    const wrapper = mountComponent()
    expect(wrapper.findAll('.pagination__item').length).toBeGreaterThan(2)
  })

  it('disables previous button on the first page', () => {
    const wrapper = mountComponent({ currentPage: 1 })
    const prevButton = wrapper.find('[data-testid="prev-icon"]').element.closest('button')
    expect(prevButton?.getAttribute('disabled')).not.toBeNull()
  })

  it('disables next button on the last page', () => {
    const wrapper = mountComponent({ currentPage: 10 })
    const nextButton = wrapper.find('[data-testid="next-icon"]').element.closest('button')
    expect(nextButton?.getAttribute('disabled')).not.toBeNull()
  })

  it('renders correct number of page buttons', () => {
    const wrapper = mountComponent({ maxVisibleButtons: 5 })
    const pageButtons = wrapper.findAll('.pagination__btn')
    expect(pageButtons.length - 1).toBe(5)
  })

  it('emits "pagechanged" event when a page button is clicked', async () => {
    const wrapper = mountComponent()
    await wrapper.findAll('.pagination__btn')[1].trigger('click')
    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')?.[0]).toEqual([2])
  })

  it('emits "pagechanged" event when the previous button is clicked', async () => {
    const wrapper = mountComponent({ currentPage: 2 })
    const prevButton = wrapper.find('[data-testid="prev-icon"]').element.closest('button')
    await prevButton?.dispatchEvent(new Event('click'))
    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')?.[0]).toEqual([1])
  })

  it('emits "pagechanged" event when the next button is clicked', async () => {
    const wrapper = mountComponent({ currentPage: 1 })
    const nextButton = wrapper.find('[data-testid="next-icon"]').element.closest('button')
    await nextButton?.dispatchEvent(new Event('click'))
    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')?.[0]).toEqual([2])
  })

  it('applies active state to the current page button', () => {
    const wrapper = mountComponent({ currentPage: 2 })
    const activeButton = wrapper.find('.base-button--active')
    expect(activeButton.exists()).toBe(true)
    expect(activeButton.text()).toBe('2')
  })
})
