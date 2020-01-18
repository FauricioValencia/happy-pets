//? Pages
import AllPetsContainer from './Containers/AllPetsContainer'
import CreatePublicationContainer from './Containers/CreatePublicationContianer'

export const Routes = [
  { Component: AllPetsContainer, path: '/' },
  { Component: CreatePublicationContainer, path: '/new-pet' }
]
