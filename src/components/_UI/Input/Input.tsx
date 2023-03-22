import { useId } from 'react'
import InputCss from './Input.module.scss'

interface InputProps {
  type?: string
  label?: string
  name?: string
  register?: any
  errors?: any
}

const Input = ({
  type = 'text',
  label = '',
  name = '',
  register,
  errors,
}: InputProps) => {
  const idGen = useId()
  return (
    <div className={InputCss.Input}>
      <input
        name={name}
        {...register}
        type={type}
        id={`${type}-${idGen}`}
      />
      <label htmlFor={`${type}-${idGen}`}>{label}</label>
      <p className={InputCss.inputError}>{errors[name]?.message}</p>
    </div>
  )
}

export default Input
