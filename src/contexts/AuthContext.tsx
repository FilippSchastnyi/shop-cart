import { createContext, useMemo } from 'react'
import {UserDataType, UserType} from '@src/ts/types'
import { useTypedDispatch, useTypedSelector } from '@src/hooks/redux'
import { userSlice } from '@src/store/reducers/userSlice'
import {logInUser, registerUser} from "@src/store/actionCreators/user";

type AuthContextType = {
  user: UserDataType | null
  login: (userData: UserType) => void
  logout: () => void
  register: (userData: UserType) => void
}

const authContext: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {}
}

const AuthContext = createContext(authContext)

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const user = useTypedSelector((state) => state.user.data)
  const dispatch = useTypedDispatch()
  const {logOutUser} = userSlice.actions

  authContext.login = (data:UserType) => {
    dispatch(logInUser(data)).then((res)=>{
      localStorage.setItem('token', res.payload.token)
    })
  }

  authContext.register = (data:UserType) => {
    dispatch(registerUser(data)).then((res)=>{
      localStorage.setItem('token', res.payload.token)
    })
  }

  authContext.logout = () => {
    dispatch(logOutUser())
    localStorage.removeItem('token')
  }

  const value = useMemo(
    () => ({ ...authContext, user }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
