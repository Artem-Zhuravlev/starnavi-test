import axios, { type AxiosResponse } from './axios'
import type IStarship from '@/interfaces/IStarship'

export const getStarshipById = async (id: string): Promise<IStarship> => {
  try {
    const response: AxiosResponse<IStarship> = await axios.get(`/starships/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching starship by id:', error)
    throw error
  }
}
