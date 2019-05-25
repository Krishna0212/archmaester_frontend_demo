import { fromJS } from 'immutable'
import {
  LOAD_USER_NAME,
  SET_USER_NAME } from './constants'

export const initialState = fromJS({
  user: {
    name: ''
  }
})

function userReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_NAME:
      return state
    case SET_USER_NAME:
      return state.setIn(['user', 'name'], action.json)
    default:
      return state
  }
}

export default userReducer
