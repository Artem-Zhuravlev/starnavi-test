import axios, { type AxiosResponse } from './axios'
import type IPeople from '@/interfaces/IPeople'

export interface IPeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPeople[]
}

export const getPeople = async (page?: number): Promise<IPeopleResponse> => {
  try {
    const response: AxiosResponse<IPeopleResponse> = await axios.get('/people', {
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

export const getPersonById = async (id: string): Promise<IPeopleResponse> => {
  try {
    const response: AxiosResponse<IPeopleResponse> = await axios.get('/people', {
      params: { id }
    })

    return response.data
  } catch (error) {
    console.error('An error occurred while fetching person by id:', error)
    throw error
  }
}
