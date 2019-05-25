/* eslint-disable indent */
import { combineReducers } from 'redux'
import userReducer from './containers/App/reducer'

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer
