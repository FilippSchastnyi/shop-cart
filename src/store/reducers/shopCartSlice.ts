import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ActionPayloadType = PayloadAction<any>

const initialState: Array<any> = []

export const shopCartSlice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addItem: (state, action: ActionPayloadType) => {
    },
    removeItem: (state, action: ActionPayloadType) => {
    },
    reset: () => {
    },
  },
})

export default shopCartSlice.reducer
