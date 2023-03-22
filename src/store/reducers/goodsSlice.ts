import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {GoodsType} from "@src/ts/types";
import {createNewGoods, getAllGoods, removeGoodsById, updateGoods} from "@src/store/actionCreators/goods";

type ActionPayloadType = PayloadAction<any>

type GoodsStateType = {
  data: Array<GoodsType>
  isLoading: boolean,
  error: string | null
}

const initialState: GoodsStateType = {
  data: [],
  isLoading: false,
  error: null,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder
      .addCase(createNewGoods.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createNewGoods.fulfilled, (state, action) => {
        state.isLoading = false
        state.data.push(action.payload)
      })
      .addCase(createNewGoods.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(removeGoodsById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(removeGoodsById.fulfilled, (state, action) => {
        state.isLoading = false
        const itemIndex = state.data.findIndex(item => item.id === action.payload.id)
        state.data.splice(itemIndex, 1)
      })
      .addCase(removeGoodsById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateGoods.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateGoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map(item => {
          const newItemData = action.payload.find(newItem => newItem.id === item.id);
          return newItemData || item;
        });
      })
      .addCase(updateGoods.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(getAllGoods.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllGoods.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(getAllGoods.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export default goodsSlice.reducer