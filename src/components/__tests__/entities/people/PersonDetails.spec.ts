import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PersonDetails from '@/components/entities/people/PersonDetails.vue'
import PersonDetailsSkeleton from '@/components/entities/people/PersonDetailsSkeleton.vue'
import { imageUrl } from '@/api/axios'

describe('PersonDetails', () => {
  it('renders person details when props are provided', () => {
    const details = {
      id: '1',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      gender: 'male'
    }

    const wrapper = mount(PersonDetails, {
      props: { details }
    })

    // Check if the image is rendered
    const img = wrapper.find('.person-details__img')
    // Ensure the image exists
    expect(img.exists()).toBe(true)
    // Adjust URL based on your imageUrl setup
    expect(img.attributes('src')).toBe(`${imageUrl}/characters/1.jpg`)

    // Check if the details are rendered correctly
    expect(wrapper.text()).toContain('Name: Luke Skywalker')
    expect(wrapper.text()).toContain('Height: 172')
    expect(wrapper.text()).toContain('Mass: 77')
    expect(wrapper.text()).toContain('Hair color: blond')
    expect(wrapper.text()).toContain('Skin color: fair')
    expect(wrapper.text()).toContain('Eye color: blue')
    expect(wrapper.text()).toContain('Gender: male')
  })

  it('renders skeleton when no details are provided', () => {
    const wrapper = mount(PersonDetails, {
      props: { details: null }
    })

    // Check if the skeleton component is rendered
    expect(wrapper.findComponent(PersonDetailsSkeleton).exists()).toBe(true)

    // Check that the main details component is not rendered
    expect(wrapper.find('.person-details').exists()).toBe(false)
  })
})
