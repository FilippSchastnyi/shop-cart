import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserType} from "@src/ts/types";
import {USER_API} from "@src/constants";

export const logInUser = createAsyncThunk(
  'user/logInUser',
  async (userData: UserType) => {
    const response = await fetch(`${USER_API}/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userData)
    })
    return response.json()
  }
)

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: UserType) => {
    const response = await fetch(`${USER_API}/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userData)
    })
    return response.json()
  }
)