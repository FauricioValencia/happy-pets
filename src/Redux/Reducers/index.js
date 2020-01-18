import { combineReducers } from 'redux'
import pets from './petsReducers'

const rootReducer = combineReducers({
  pets
})

export default rootReducer
