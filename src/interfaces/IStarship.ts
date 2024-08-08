import type IResource from './IBase'
import { type IResourceUrl } from './IBase'

export default interface IStarship extends IResource {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: IResourceUrl[]
  films: IResourceUrl[]
}
