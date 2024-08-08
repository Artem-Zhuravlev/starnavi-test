import axios, { type AxiosResponse } from './axios'
import type IStarship from '@/interfaces/IStarship'

export const getFilmById = async (id: string): Promise<IStarship> => {
  try {
    const response: AxiosResponse<IStarship> = await axios.get('/films', {
      params: { id }
    })

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching film by id:', error)
    throw error
  }
}
