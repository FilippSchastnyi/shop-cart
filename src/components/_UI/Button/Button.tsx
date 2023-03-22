import React from 'react'
import ButtonCss from './Button.module.scss'

interface ButtonProps {
  /**
   * Function for clicking
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Children to be displayed in the button
   */
  children: string | JSX.Element
  /**
   * The size of button to be used
   * one of 'lg' | 'sm' | 'md | w100'
   */
  size?: 'lg' | 'sm' | 'md' | 'w100' | 'auto'
  /**
   * The type of button to be used
   * one of 'outlined' | 'text' | 'contained'
   */
  variant?: 'outlined' | 'text' | 'contained' | 'link'
  /**
   * Checks if the button should be disabled
   */
  disabled?: boolean
  /**
   * Determines if the spinner is to be shown or not.
   * @type {boolean}
   */
  showSpinner?: boolean
  /**
   * Determines the default behavior of the button
   */
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  children,
  size = 'md',
  variant = 'contained',
  onClick,
  showSpinner = false,
  disabled = false,
  type = 'button',
}: ButtonProps): JSX.Element => {

  const cls = [
    ButtonCss.btn,
    ButtonCss[`btn--${size}`],
    ButtonCss[`btn--${variant}`],
  ]

  return (
    <button
      type={type}
      className={cls.join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {showSpinner && <>loading...</>}
      {/* Spinner ::TODO */}
      {children}
    </button>
  )
}

export default Button
