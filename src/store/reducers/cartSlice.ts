import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {GoodsType} from "@src/ts/types";

type ActionPayloadType = PayloadAction<any>

type CartStateType = {
  data: Array<GoodsType>
  isLoading: boolean,
  error: string | null
  totalPrice: number
}

const initialState: CartStateType = {
  data: [],
  isLoading: false,
  error: null,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: ActionPayloadType) => {
      const itemIndex = state.data.findIndex(item => item.id === action.payload.id)
      const isItemInCart = itemIndex !== -1
      if (isItemInCart) {
        state.data[itemIndex].quantity += 1
        state.data[itemIndex].price += action.payload.price
      }
      else {
        state.data.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.price
        })
      }
      state.totalPrice = state.data.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    removeItemFromCart: (state, action: ActionPayloadType) => {
      const itemIndex = state.data.findIndex(item => item.id === action.payload.id)
      const isItemInCart = itemIndex !== -1
      const itemQuantity = state.data[itemIndex].quantity
      if (isItemInCart && itemQuantity > 1){
        state.data[itemIndex].quantity = itemQuantity - 1
        state.data[itemIndex].price -= action.payload.price
      }
      else {
        state.data.splice(itemIndex, 1)
      }
      state.totalPrice = state.data.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    deleteProduct: (state, action: ActionPayloadType) => {
      const itemIndex = state.data.findIndex(item => item.id === action.payload.id)
      state.data.splice(itemIndex, 1)
    }
  },
})

export default cartSlice.reducer
