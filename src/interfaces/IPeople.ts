import type IResource from './IBase'
import { type IResourceUrl } from './IBase'

export default interface IPeople extends IResource {
  birth_year: string
  eye_color: string
  films: IResourceUrl[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: IResourceUrl[]
  starships: IResourceUrl[]
  vehicles: IResourceUrl[]
}
