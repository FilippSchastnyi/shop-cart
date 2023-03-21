import { combineReducers } from 'redux'
import userReducer from '@src/store/reducers/userSlice'
import cartReducer from '@src/store/reducers/cartSlice'
import goodsReducer from '@src/store/reducers/goodsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  goods: goodsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: appReducer,
  })
}

export type AppStateType = ReturnType<typeof appReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']
