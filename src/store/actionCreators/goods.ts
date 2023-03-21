import {createAsyncThunk} from "@reduxjs/toolkit";
import {GoodsType} from "@src/ts/types";
import {GOODS_API} from "@src/constants";

export const createNewGoods = createAsyncThunk(
  'goods/createNewGoods',
  async (goodsData: GoodsType) => {
    const response = await fetch(`${GOODS_API}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(goodsData)
    })
    return response.json()
  }
)

export const removeGoodsById = createAsyncThunk(
  'goods/removeGoodsById',
  async (id: string, thunkAPI) => {
    try {
      await fetch(`${GOODS_API}/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      })
      return {id}
    }
    catch (e){
      return thunkAPI.rejectWithValue("Something went wrong with your request")
    }
  }
)

export const getAllGoods = createAsyncThunk(
  'goods/getAllGoods',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${GOODS_API}`)
      const json = await response.json()
      if (json.message){
        return thunkAPI.rejectWithValue(json.message)
      }
      return json
    }
    catch (e){
      return thunkAPI.rejectWithValue("Something went wrong with your request")
    }
  }
)