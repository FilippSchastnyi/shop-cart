import { combineReducers } from 'redux'
import userSlice from '@src/store/reducers/userSlice'

export const rootReducers = combineReducers({
  user: userSlice,
})
