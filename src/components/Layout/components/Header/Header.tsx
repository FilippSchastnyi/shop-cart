import { useContext, useReducer } from 'react'
import Logo from '@components/Logo/Logo'
import Modal from '@ui/Modal/Modal'
import Login from '@components/Auth/Login'
import { AuthVariant } from '@src/ts/enums'
import { AuthContext } from '@src/contexts/AuthContext'
import { authModalReducer, initialState } from '@src/reducers/AuthModalReducer'
import Registration from '@components/Auth/Registration'
import HeaderActionGroup from '@components/Layout/components/Header/HeaderActionGroup/HeaderActionGroup'
import HeaderCss from './Header.module.scss'

const Header = (): JSX.Element => {
  const authContext = useContext(AuthContext)
  const [state, dispatch] = useReducer(authModalReducer, initialState)

  const onHandleAuthMethodChange = (variant: AuthVariant) => {
    return () => {
      if (variant === AuthVariant.LogOut) {
        authContext.logout()
      }
      dispatch({
        type: variant,
      })
    }
  }

  const renderAuthModal = (
    authPopupVariant: AuthVariant
  ): JSX.Element | null => {
    switch (authPopupVariant) {
      case AuthVariant.None:
        return null
      case AuthVariant.LogIn:
        return (
          <Login
            changeAuthMethod={onHandleAuthMethodChange(AuthVariant.Registration)}
            completeAuthMethod={onHandleAuthMethodChange(AuthVariant.None)}
          />
        )
      case AuthVariant.Registration:
        return (
          <Registration
            changeAuthMethod={onHandleAuthMethodChange(AuthVariant.LogIn)}
            completeAuthMethod={onHandleAuthMethodChange(AuthVariant.None)}
          />
        )
      default:
        return null
    }
  }

  return (
    <header className={HeaderCss.header}>
      <div className={HeaderCss.wrapper}>
        <Logo />
        <HeaderActionGroup callAuthMethod={onHandleAuthMethodChange} />
      </div>
      <Modal
        active={state.isModalActive}
        closeModal={onHandleAuthMethodChange(AuthVariant.None)}
      >
        <>{renderAuthModal(state.authPopupVariant)}</>
      </Modal>
    </header>
  )
}

export default Header
