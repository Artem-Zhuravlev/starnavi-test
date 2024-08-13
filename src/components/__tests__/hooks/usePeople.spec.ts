import { describe, it, expect, vi } from 'vitest'
import { usePeople } from '@/hooks/usePeople'
import { getPeople, type IPeopleResponse } from '@/api/people'
import type IPeople from '@/interfaces/IPeople'

vi.mock('@/api/people', () => ({
  getPeople: vi.fn()
}))

const mockData: IPeopleResponse<IPeople[]> = {
  results: [
    {
      birth_year: '57BBY',
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      eye_color: 'blue-gray',
      films: ['1', '2', '3'],
      gender: 'male',
      hair_color: 'auburn, white',
      height: '182',
      homeworld: '20',
      id: '10',
      mass: '77',
      name: 'Obi-Wan Kenobi',
      skin_color: 'fair',
      species: ['1'],
      starships: ['48', '59'],
      url: 'https://test.test/people/10/',
      vehicles: ['38']
    }
  ],
  next: 'https://test.test?page=2',
  previous: null,
  count: 1
}

describe('usePeople', () => {
  it('should initialize correctly', () => {
    const people = usePeople()

    expect(people.isLoading.value).toBe(true)
    expect(people.currentPage.value).toBe(1)
    expect(people.total.value).toBe(0)
    expect(people.itemsPerPage.value).toBe(0)
    expect(people.items.value).toEqual([])
  })

  it('should fetch people and update state', async () => {
    const mockGetPeople = vi.mocked(getPeople)
    mockGetPeople.mockResolvedValue(mockData)

    const people = usePeople()

    await people.fetchPeople()

    expect(mockGetPeople).toHaveBeenCalledWith(1)
    expect(people.isLoading.value).toBe(false)
    expect(people.items.value).toEqual(mockData.results)
    expect(people.itemsPerPage.value).toBe(mockData.results.length)
    expect(people.total.value).toBe(mockData.count)
    expect(people.totalPages.value).toBe(1)
  })

  it('should handle page change and fetch new data', async () => {
    const mockGetPeople = vi.mocked(getPeople)
    mockGetPeople.mockResolvedValue(mockData)

    const people = usePeople()

    await people.onPageChange(2)

    expect(mockGetPeople).toHaveBeenCalledWith(2)
    expect(people.currentPage.value).toBe(2)
    expect(people.items.value).toEqual(mockData.results)
    expect(people.total.value).toBe(mockData.count)
    expect(people.totalPages.value).toBe(Math.ceil(mockData.count / people.itemsPerPage.value))
  })

  it('should handle fetchPeople errors gracefully', async () => {
    const mockGetPeople = vi.mocked(getPeople)
    mockGetPeople.mockRejectedValue(new Error('Network error'))

    const people = usePeople()

    await people.fetchPeople()

    expect(people.isLoading.value).toBe(false)
    expect(people.items.value).toEqual([])
    expect(people.total.value).toBe(0)
  })
})
