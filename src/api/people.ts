import axios, { type AxiosResponse } from './axios'
import type IPeople from '@/interfaces/IPeople'

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
