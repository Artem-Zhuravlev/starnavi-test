import type IResource from './IBase'
import { type IResourceUrl } from './IBase'

export default interface IFilm extends IResource {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: IResourceUrl[]
  planets: IResourceUrl[]
  starships: IResourceUrl[]
  vehicles: IResourceUrl[]
  species: IResourceUrl[]
}
