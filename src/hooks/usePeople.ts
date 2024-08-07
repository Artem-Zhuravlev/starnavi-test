import { ref, computed } from 'vue'
import { getPeople } from '@/api/people'
import type IPeople from '@/interfaces/IPeople'

export function usePeople() {
  const isLoading = ref<boolean>(true)
  const currentPage = ref<number>(1)
  const total = ref<number>(0)
  const itemsPerPage = ref<number>(0)
  const items = ref<IPeople[]>([])

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

  const totalPages = computed(() => {
    return Math.ceil(total.value / itemsPerPage.value)
  })

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
