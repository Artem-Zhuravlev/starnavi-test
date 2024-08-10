const mockStarship = {
  id: 'ship1',
  name: 'X-Wing',
  model: 'T-65 X-wing starfighter',
  manufacturer: 'Incom Corporation',
  cost_in_credits: '149999',
  length: '12.5',
  max_atmosphering_speed: '1050',
  crew: '1',
  passengers: '0',
  cargo_capacity: '110',
  consumables: '1 week',
  hyperdrive_rating: '1.0',
  MGLT: '100',
  starship_class: 'Starfighter',
  pilots: [],
  films: [1],
  created: '2024-08-10T00:00:00.000Z',
  edited: '2024-08-10T00:00:00.000Z',
  url: 'https://swapi.dev/api/starships/12/',
  slug: 'x-wing'
}

import type { IPersonDetails } from '@/interfaces/IPersonDetails'

const mockFilm = {
  slug: 'film1',
  title: 'A New Hope',
  starships: [mockStarship]
}

export const personDetailsFlowMock: IPersonDetails = {
  id: '1',
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 1,
  films: [mockFilm],
  species: [],
  vehicles: [],
  starships: [],
  created: '2024-08-10T00:00:00.000Z',
  edited: '2024-08-10T00:00:00.000Z',
  url: 'https://swapi.dev/api/people/1/'
}
