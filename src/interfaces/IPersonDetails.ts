import type IFilm from './IFilm'

interface Starship {
  id: string
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
  pilots: string[]
  films: number[]
  created: string
  edited: string
  url: string
  slug: string
}

interface Film extends Pick<IFilm, 'title'> {
  slug: string
  title: string
  starships: Starship[]
}

export interface IPersonDetails {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: number
  films: Film[]
  species: number[]
  vehicles: number[]
  starships: number[]
  created: string
  edited: string
  url: string
}
