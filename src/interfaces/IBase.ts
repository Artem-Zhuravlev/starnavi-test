export enum ResourceType {
  People = 'people'
}

export type IResourceUrl = string

export default interface IResource {
  url: IResourceUrl
  id: string
  created: string
  edited: string
}
