import { createSlice } from '@reduxjs/toolkit'
import {logInUser, registerUser} from "@src/store/actionCreators/user";
import {UserDataType} from "@src/ts/types";

type UserStateType = {
  data: null | UserDataType
  status: string
  error: string | null
}

const initialState: UserStateType = {
  data: null,
  status: 'idle',
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser:(state)=>{
      state.status = 'idle'
      state.data = null
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error?.message || 'Unexpected Log In User Error'
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error?.message || 'Unexpected Registration Error'
      })
  },
})

export default userSlice.reducer
