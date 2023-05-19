import { combineReducers } from 'redux'
import { usersApi } from '../services/usersAPI/usersApi'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
})

export default rootReducer
