import type IPeople from '@/interfaces/IPeople'
import { getFilmById } from './films'
import { getStarshipById } from './starship'

/**
 * Fetches film details based on an array of film URLs.
 *
 * @param {string[]} filmUrls - An array of film URLs.
 * @returns {Promise<object[]>} A promise that resolves to an array of film objects.
 */
export const fetchFilms = async (filmUrls: string[]) => {
  if (!filmUrls.length) return []

  const filmRequests = filmUrls.map((url) => getFilmById(url))
  const filmResponses = await Promise.all(filmRequests)
  return filmResponses
}

/**
 * Fetches starship details based on an array of starship URLs.
 *
 * @param {string[]} starshipUrls - An array of starship URLs.
 * @returns {Promise<object[]>} A promise that resolves to an array of starship objects.
 */
export const fetchStarships = async (starshipUrls: string[]) => {
  if (!starshipUrls.length) return []

  const starshipRequests = starshipUrls.map((url) => getStarshipById(url))
  const starshipResponses = await Promise.all(starshipRequests)
  return starshipResponses
}

/**
 * Fetches films and starships associated with a person.
 *
 * @param {IPeople} person - The person object containing films and starships URLs.
 * @returns {Promise<{ films: object[], starships: object[] }>} A promise that resolves to an object containing arrays of films and starships.
 */
export const fetchFilmsAndStarships = async (person: IPeople) => {
  const filmUrls = Array.from(new Set(person.films || []))
  const starshipUrls = Array.from(new Set(person.starships || []))

  const [films, starships] = await Promise.all([fetchFilms(filmUrls), fetchStarships(starshipUrls)])

  return { films, starships }
}
