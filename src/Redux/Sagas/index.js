import { all } from 'redux-saga/effects'

import petsSagas from './petsSagas'

export default function* rootSaga() {
  yield all([petsSagas()])
}
