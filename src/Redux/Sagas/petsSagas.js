import { takeLatest, put, call, all } from 'redux-saga/effects'

import { putPetList } from '../Actions'
import { FETCH_PET_LIST } from '../Types'
import { fetchPets } from '../../Services/Api'
// TODO: add putFetching and putFetchingDone
export function* fetchPetList() {
  const constext = 'fetchPetList saga'
  try {
    const { pets } = yield call(fetchPets)
    yield put(putPetList(pets))
  } catch (error) {
    console.log(`fail ${constext}: ${error}`)
  }
}

// Region Watchers

function* watchFetchPetList() {
  yield takeLatest(FETCH_PET_LIST, fetchPetList)
}

export default function* petSagas() {
  yield all([watchFetchPetList()])
}
