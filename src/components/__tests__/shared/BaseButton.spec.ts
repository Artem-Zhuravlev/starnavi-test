import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseButton from '@/components/shared/BaseButton.vue' // Adjust the import path as necessary

describe('BaseButton.vue', () => {
  it('renders the button with default props', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('base-button')
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('disables the button when loading is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true
      }
    })
    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('shows the loading spinner when loading is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true
      }
    })
    const spinner = wrapper.find('[data-testid="spinner"]')
    expect(spinner.exists()).toBe(true)
    expect(spinner.classes()).toContain('base-button__spinner')
  })

  it('does not show the loading spinner when loading is false', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: false
      }
    })
    const spinner = wrapper.find('[data-testid="spinner"]')
    expect(spinner.exists()).toBe(false)
  })

  it('renders default slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toBe('Click me')
  })
})
