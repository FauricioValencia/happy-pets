import { connect } from 'react-redux'

import CreatePost from '../Components/CreatePost'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => {
  return {}
}

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)

export default CreatePostContainer
