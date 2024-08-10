import axios, { type AxiosResponse } from './axios'
import type IStarship from '@/interfaces/IStarship'

/**
 * Fetches a starship by its ID.
 *
 * @param {string} id - The ID of the starship to fetch.
 * @returns {Promise<IStarship>} A promise that resolves to the starship object.
 * @throws Will throw an error if the request fails.
 */
export const getStarshipById = async (id: string): Promise<IStarship> => {
  try {
    const response: AxiosResponse<IStarship> = await axios.get(`/starships/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching starship by id:', error)
    throw error
  }
}
