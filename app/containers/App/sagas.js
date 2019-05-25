import { all, call, put, takeLatest } from 'redux-saga/effects'
import request from '../../utils/request'
import {
  LOAD_USER_NAME,
  SET_USER_NAME } from './constants'

function * fetchUserName () {
  const response = yield call(request, 'http://dummy.restapiexample.com/api/v1/employees')
  yield put({ type: SET_USER_NAME, json: response })
}
function * actionWatcher () {
  yield takeLatest(LOAD_USER_NAME, fetchUserName)
}
export default function * rootSaga () {
  yield all([
    actionWatcher()
  ])
}
