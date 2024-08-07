import axios, { type AxiosResponse } from 'axios'
import type IPeople from '@/interfaces/IPeople'

const url = import.meta.env.VITE_APP_SW_API_URL as string
export const imageUrl = import.meta.env.VITE_APP_SW_IMAGES_URL as string

export interface IPeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPeople[]
}

export const getPeople = async (page?: number): Promise<IPeopleResponse> => {
  try {
    const response: AxiosResponse<IPeopleResponse> = await axios.get(`${url}/people`, {
      params: {
        page
      }
    })

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching people:', error)
    throw error
  }
}
