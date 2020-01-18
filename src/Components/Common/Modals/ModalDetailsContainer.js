import ModalDetails from './ModalDetails'
import { connect } from 'react-redux'

import { petsSelectors } from '../../../Redux/Selectors'

const mapStateToProps = state => ({
  petSelected: petsSelectors.getPetSelected(state)
})
const mapDispatchToProps = dispatch => {
  return {
    selectedPet: () => {
      console.log('asd')
    }
  }
}

const ModalDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ModalDetails)

export default ModalDetailsContainer
