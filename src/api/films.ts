import axios, { type AxiosResponse } from './axios'
import type IFilm from '@/interfaces/IFilm'

export const getFilmById = async (id: string): Promise<IFilm> => {
  try {
    const response: AxiosResponse<IFilm> = await axios.get(`/films/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching film by id:', error)
    throw error
  }
}
