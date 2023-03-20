import Input from '@ui/Input/Input'
import { useFormContext } from 'react-hook-form'
import FormControlsCss from './FormControls.module.scss'

const LoginFormControls = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <div className={FormControlsCss.FormControl}>
        <Input
          label="Email"
          name="email"
          register={register('email')}
          errors={errors}
        />
      </div>
      <div className={FormControlsCss.FormControl}>
        <Input
          label="Password"
          name="password"
          register={register('password')}
          errors={errors}
        />
      </div>
    </>
  )
}

export default LoginFormControls
