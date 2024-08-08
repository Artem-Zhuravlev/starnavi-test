export enum ResourceType {
  People = 'people',
  Film = 'films',
  Starship = 'starships'
}

export type IResourceUrl = string

export default interface IResource {
  url: IResourceUrl
  id: string
  created: string
  edited: string
}
