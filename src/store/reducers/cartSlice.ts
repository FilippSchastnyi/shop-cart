import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodsType } from '@src/ts/types'

type ActionPayloadType = PayloadAction<any>

type CartStateType = {
  data: Array<GoodsType>
  isLoading: boolean
  error: string | null
  totalPrice: number
}

const initialState: CartStateType = {
  data: [],
  isLoading: false,
  error: null,
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: ActionPayloadType) => {
      const itemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      )
      const isItemInCart = itemIndex !== -1
      if (isItemInCart) {
        state.data[itemIndex].quantity += 1
        state.data[itemIndex].price += action.payload.price
      } else {
        state.data.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.price,
        })
      }
      state.totalPrice = state.data.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
    removeItemFromCart: (state, action: ActionPayloadType) => {
      if (Array.isArray(action.payload)) {
        const idsToDelete = action.payload.map((item) => item.id)
        const updatedData = state.data.filter(
          (item) => !idsToDelete.includes(item.id)
        )
        const totalPrice = updatedData.reduce(
          (acc, current) => acc + current.price,
          0
        )
        return {
          ...state,
          data: updatedData,
          totalPrice,
        }
      } else {
        const itemIndex = state.data.findIndex(
          (item) => item.id === action.payload.id
        )
        if (itemIndex === -1) {
          return state
        }
        const item = state.data[itemIndex]
        const updatedItem = {
          ...item,
          quantity: item.quantity - 1,
          price: item.price - action.payload.price,
        }
        const updatedData = [...state.data]
        if (updatedItem.quantity <= 0) {
          updatedData.splice(itemIndex, 1)
        } else {
          updatedData[itemIndex] = updatedItem
        }
        const totalPrice = updatedData.reduce(
          (acc, current) => acc + current.price,
          0
        )
        return {
          ...state,
          data: updatedData,
          totalPrice,
        }
      }
    },
    deleteProduct: (state, action: ActionPayloadType) => {
      const itemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      )
      state.data.splice(itemIndex, 1)
      state.totalPrice = state.data.reduce((acc, current) => {
        return acc + current.price
      }, 0)
    },
  },
})

export default cartSlice.reducer
