import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import HappyPets from './Containers/index'
import rootSaga from './Redux/Sagas'
import rootReducer from './Redux/Reducers'

const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
function App() {
  return (
    <Provider store={store}>
      <HappyPets />
    </Provider>
  )
}
export default App
