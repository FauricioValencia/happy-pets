import { connect } from 'react-redux'

import AllPets from '../Components/PetList'
import { fetchPetList, putSelectedPet } from '../Redux/Actions'
import { petsSelectors } from '../Redux/Selectors'

const mapStateToProps = state => ({
  PetList: petsSelectors.getPetList(state)
})
const mapDispatchToProps = dispatch => {
  return {
    getPetList: () => {
      dispatch(fetchPetList())
    },
    putSelectedPet: pet => {
      dispatch(putSelectedPet(pet))
    }
  }
}

const AllPetsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPets)

export default AllPetsContainer
