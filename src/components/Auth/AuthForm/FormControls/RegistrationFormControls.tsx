import Input from '@ui/Input/Input'
import { useFormContext } from 'react-hook-form'
import FormControlsCss from './FormControls.module.scss'

const RegistrationFormControls = () => {
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
          type="email"
          register={register('email')}
          errors={errors}
        />
      </div>
      <div className={FormControlsCss.FormControl}>
        <Input
          label="Password"
          name="password"
          type="password"
          register={register('password')}
          errors={errors}
        />
      </div>
      <div className={FormControlsCss.FormControl}>
        <Input
          label="Repeat password"
          name="confirm_password"
          type="password"
          register={register('confirm_password')}
          errors={errors}
        />
      </div>
    </>
  )
}

export default RegistrationFormControls
