import axios, { type AxiosResponse } from './axios'
import type IPeople from '@/interfaces/IPeople'
import { fetchFilms } from './films'
import { fetchStarships } from './starship'

export interface IPeopleResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T
}
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

export const getPersonById = async (id: string): Promise<IPeople> => {
  try {
    const response: AxiosResponse<IPeople> = await axios.get(`/people/${id}`)

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching person by id:', error)
    throw error
  }
}

export const getPersonWithDetailsById = async (id: string) => {
  try {
    const person = await getPersonById(id)

    if (!person) {
      throw new Error('Person not found')
    }

    const [films, starships] = await Promise.all([
      fetchFilms(person.films || []),
      fetchStarships(person.starships || [])
    ])

    return {
      ...person,
      films: films.map((film) => ({
        title: film.title,
        starships: starships.filter((starship) => film.starships.includes(starship.id))
      }))
    }
  } catch (error) {
    console.error('An error occurred while fetching person details by id:', error)
    throw error
  }
}
