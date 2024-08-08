import axios, { type AxiosResponse } from 'axios'

export const imageUrl = import.meta.env.VITE_APP_SW_IMAGES_URL as string
axios.defaults.baseURL = import.meta.env.VITE_APP_SW_API_URL as string

export default axios
export type { AxiosResponse }
