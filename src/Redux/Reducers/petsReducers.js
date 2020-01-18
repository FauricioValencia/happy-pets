import produce from 'immer'

import { PUT_PET_LIST, PUT_SELECTED_PET } from '../Types'

const initialState = {
  petList: [],
  petSelected: {}
}

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PUT_PET_LIST:
        draft.petList = action.petList
        break
      case PUT_SELECTED_PET:
        draft.petSelected = action.selectedPet
        break
      default:
        break
    }
  })
