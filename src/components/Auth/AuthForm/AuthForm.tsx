import { FormProvider, useForm } from 'react-hook-form'
import RegistrationFormControls from '@components/Auth/AuthForm/FormControls/RegistrationFormControls'
import { AuthVariant } from '@src/ts/enums'
import LoginFormControls from '@components/Auth/AuthForm/FormControls/LoginFormControls'
import { yupResolver } from '@hookform/resolvers/yup'
import FormValidationService from '@src/ts/services/FormValidationService'
import Button from '@ui/Button/Button'
import { useContext } from 'react'
import { AuthContext } from '@src/contexts/AuthContext'
import { UserType } from '@src/ts/types'

interface IAuthFormProps {
  variant: AuthVariant.Registration | AuthVariant.LogIn
  completeAuthMethod: any
}

const AuthForm = ({ variant, completeAuthMethod }: IAuthFormProps) => {
  const authContext = useContext(AuthContext)

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(FormValidationService.getValidationSchema(variant)),
  })

  const onHandleSubmitForm = (formData: UserType, actionType: AuthVariant) => {
    actionType === AuthVariant.LogIn
      ? authContext.login(formData)
      : authContext.register(formData)

    completeAuthMethod()
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          const user: UserType = {
            email: data.email,
            password: data.password,
          }
          onHandleSubmitForm(user, variant)
        })}
      >
        {variant === AuthVariant.LogIn && <LoginFormControls />}
        {variant === AuthVariant.Registration && <RegistrationFormControls />}
        <Button size="w100" type="submit">
          {variant === AuthVariant.Registration ? 'Register' : 'Log In'}
        </Button>
      </form>
    </FormProvider>
  )
}

export default AuthForm
