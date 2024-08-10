import axios, { type AxiosResponse } from './axios'
import type IFilm from '@/interfaces/IFilm'

/**
 * Fetches a film by its ID.
 *
 * @param {string} id - The ID of the film to fetch.
 * @returns {Promise<IFilm>} A promise that resolves to the film object.
 * @throws Will throw an error if the request fails.
 */
export const getFilmById = async (id: string): Promise<IFilm> => {
  try {
    const response: AxiosResponse<IFilm> = await axios.get(`/films/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching film by id:', error)
    throw error
  }
}
