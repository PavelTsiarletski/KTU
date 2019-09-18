import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../base/api/catalog-api'

function* fetchServiceAlarms(action) {
    try {
      const data = yield call(Api.getData, action.payload)
      yield put({
        type: 'FETCH_DATA_SUCCESS',
        data,
        appendType: action.appendType,
        isPolling: action.isPolling
      })
    } catch (error) {
      yield put({ type: 'FETCH_DATA_FAILED', error })
    }
  }
  
  export function* getData() {
    yield takeLatest('FETCH_DATA', fetchServiceAlarms)
  }
  