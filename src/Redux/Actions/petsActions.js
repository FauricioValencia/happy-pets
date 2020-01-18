import {
  FETCH_PET_LIST,
  PUT_PET_LIST,
  FETCH_SELECTED_PET,
  PUT_SELECTED_PET,
  ADD_NEW_PET
} from '../Types'
// TODO: update DOC
/**
 * Dispatch this action to initiate the get pets from service flow.
 */
export const fetchPetList = () => ({ type: FETCH_PET_LIST })

/**
 * Dispatch this action when the pets as been received and needs
 * to be added to the state store.
 */
export const putPetList = petList => ({ type: PUT_PET_LIST, petList })

/**
 * Dispatch this action to initiate to get pet selected from service flow.
 */
export const fetchSelectedPet = () => ({ type: FETCH_SELECTED_PET })

/**
 * Dispatch this action when the pet selected as been received and needs
 * to be added to the state store.
 */
export const putSelectedPet = selectedPet => ({
  type: PUT_SELECTED_PET,
  selectedPet
})

/**
 * Dispatch this action to add new pet to pets.
 */
export const addNewPet = newPet => ({ type: ADD_NEW_PET, newPet })
