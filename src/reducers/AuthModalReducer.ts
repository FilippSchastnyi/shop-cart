import { Reducer } from 'react'
import { AuthVariant } from '@src/ts/enums'

type AuthModalState = {
  isModalActive: boolean
  authPopupVariant: AuthVariant
}

type AuthModalAction = { type: AuthVariant }

const initialState: AuthModalState = {
  isModalActive: false,
  authPopupVariant: AuthVariant.LogOut,
}

const authModalReducer: Reducer<AuthModalState, AuthModalAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthVariant.None:
      return {
        ...state,
        isModalActive: false,
        authPopupVariant: AuthVariant.None,
      }
    case AuthVariant.LogIn:
      return {
        ...state,
        isModalActive: true,
        authPopupVariant: AuthVariant.LogIn,
      }
    case AuthVariant.Registration:
      return {
        ...state,
        isModalActive: true,
        authPopupVariant: AuthVariant.Registration,
      }
    default:
      return state
  }
}

export { authModalReducer, initialState }
