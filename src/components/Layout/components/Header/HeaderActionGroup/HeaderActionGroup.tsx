import { AuthVariant } from '@src/ts/enums'
import { useContext, useId } from 'react'
import { AuthContext } from '@src/contexts/AuthContext'
import Button from '@ui/Button/Button'
import HeaderActionGroupCss from './HeaderActionGroup.module.scss'

type ActionGroupType = { label: string; actionVariant: AuthVariant; id: string }

const HeaderActionGroup = ({ callAuthMethod }: any): JSX.Element => {
  const authContext = useContext(AuthContext)
  const actionButtonsGroup: ActionGroupType[] = [
    { label: 'Log Out', actionVariant: AuthVariant.LogOut, id: useId() },
    { label: 'Log In', actionVariant: AuthVariant.LogIn, id: useId() },
    { label: 'Sign Up', actionVariant: AuthVariant.Registration, id: useId() },
  ]

  const renderActionGroup = (): JSX.Element[] => {
    const isUserLogIn = authContext.user?.email
    const actionGroupForRender = actionButtonsGroup.filter((item) =>
      isUserLogIn
        ? item.actionVariant === AuthVariant.LogOut
        : item.actionVariant === AuthVariant.LogIn ||
          item.actionVariant === AuthVariant.Registration
    )

    return actionGroupForRender.map((action): JSX.Element => {
      return (
        <Button
          key={action.id}
          size="sm"
          onClick={callAuthMethod(action.actionVariant)}
        >
          {action.label}
        </Button>
      )
    })
  }
  return (
    <div className={HeaderActionGroupCss.buttonGroup}>
      {renderActionGroup()}
    </div>
  )
}

export default HeaderActionGroup
