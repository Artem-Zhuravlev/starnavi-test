import axios, { type AxiosResponse } from './axios'
import type IPeople from '@/interfaces/IPeople'
import { fetchFilmsAndStarships } from './helpers'

export interface IPeopleResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T
}

/**
 * Fetches a list of people, optionally paginated.
 *
 * @param {number} [page] - The page number to fetch (optional).
 * @returns {Promise<IPeopleResponse<IPeople>>} A promise that resolves to a response object containing the people data.
 * @throws Will throw an error if the request fails.
 */
export const getPeople = async (page?: number): Promise<IPeopleResponse<IPeople>> => {
  try {
    const response: AxiosResponse<IPeopleResponse<IPeople>> = await axios.get('/people', {
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

/**
 * Fetches a specific person by their ID.
 *
 * @param {string} id - The ID of the person to fetch.
 * @returns {Promise<IPeople>} A promise that resolves to the person object.
 * @throws Will throw an error if the request fails.
 */
export const getPersonById = async (id: string): Promise<IPeople> => {
  try {
    const response: AxiosResponse<IPeople> = await axios.get(`/people/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching person by id:', error)
    throw error
  }
}

/**
 * Fetches a specific person by their ID along with detailed information about their films and starships.
 *
 * @param {string} id - The ID of the person to fetch.
 * @returns {Promise<object>} A promise that resolves to an object containing the person and their associated films and starships.
 * @throws Will throw an error if the request fails.
 */
export const getPersonWithDetailsById = async (id: string): Promise<object> => {
  try {
    const person = await getPersonById(id)
    if (!person) throw new Error('Person not found')

    const { films, starships } = await fetchFilmsAndStarships(person)

    return {
      ...person,
      films: films.map((film) => ({
        slug: `film${film.id}`,
        title: film.title,
        starships: starships
          .filter((starship) => film.starships.includes(starship.id))
          .map((starship) => ({
            ...starship,
            slug: `starship${starship.id}`
          }))
      }))
    }
  } catch (error) {
    console.error('An error occurred while fetching person details by id:', error)
    throw error
  }
}
