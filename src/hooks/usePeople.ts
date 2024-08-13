import { ref, computed } from 'vue'
import { getPeople } from '@/api/people'
import type IPeople from '@/interfaces/IPeople'

export function usePeople() {
  const isLoading = ref<boolean>(true)
  const currentPage = ref<number>(1)
  const total = ref<number>(0)
  const itemsPerPage = ref<number>(0)
  const items = ref<IPeople[]>([])

  // Fetch people data for the given page, update state variables, and handle loading and errors.
  const fetchPeople = async (page: number = 1) => {
    try {
      isLoading.value = true
      const data = await getPeople(page)
      items.value = data.results
      itemsPerPage.value = data.results.length
      total.value = data.count
    } catch (error) {
      console.error('Failed to fetch people:', error)
    } finally {
      isLoading.value = false
    }
  }

  // Calculate the total number of pages based on the total number of items and items per page.
  const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value)
  })

  // Update the current page and fetch new data for the selected page.
  const onPageChange = async (page: number) => {
    currentPage.value = page
    await fetchPeople(page)
  }

  return {
    isLoading,
    currentPage,
    total,
    itemsPerPage,
    items,
    totalPages,
    fetchPeople,
    onPageChange
  }
}
