import * as yup from 'yup'
import {AuthVariant} from "@src/ts/enums";

export enum EmailValidation {
  Valid,
  Required,
}

export enum PasswordValidation {
  MinLength,
  MaxLength,
  Required,
  Match,
  Correct,
}

class FormValidationService {
  getEmailErrorMessage = (validationAction: EmailValidation): string => {
    switch (validationAction) {
      case EmailValidation.Valid:
        return 'Please enter a valid email format !'
      case EmailValidation.Required:
        return 'Email is required!'
      default:
        return 'Email address is incorrect'
    }
  }

  getPasswordErrorMessage = (
    validationAction: PasswordValidation,
    length?: number
  ): string => {
    switch (validationAction) {
      case PasswordValidation.Required:
        return 'Password is required please !'
      case PasswordValidation.MinLength:
        return `Password must contain at least ${length} characters`
      case PasswordValidation.MaxLength:
        return `length should be less than ${length} symbols`
      case PasswordValidation.Match:
        return 'Password must match!'
      case PasswordValidation.Correct:
        return 'The password should be filled in with latin letters and numbers!'
      default:
        return 'password is wrong'
    }
  }

  getValidationSchema = (authVariant: AuthVariant) => {
    type AuthValidationType = {
      email: any
      password: any
      confirm_password?: any
    }
    const authValidationSchema: AuthValidationType = {
      email: yup
        .string()
        .email(this.getEmailErrorMessage(EmailValidation.Valid))
        .required(this.getEmailErrorMessage(EmailValidation.Required)),
      password: yup
        .string()
        .min(6, this.getPasswordErrorMessage(PasswordValidation.MinLength, 6))
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          this.getPasswordErrorMessage(PasswordValidation.Correct)
        )
        .required(this.getPasswordErrorMessage(PasswordValidation.Required)),
    }

    if (authVariant === AuthVariant.Registration) {
      authValidationSchema.confirm_password = yup
        .string()
        .label('Repeat password')
        .required()
        .min(6, this.getPasswordErrorMessage(PasswordValidation.MinLength, 6))
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          this.getPasswordErrorMessage(PasswordValidation.Correct)
        )
        .oneOf(
          [yup.ref('password'), null],
          this.getPasswordErrorMessage(PasswordValidation.Match)
        )
    }

    return yup.object().shape(authValidationSchema)
  }
}

export default new FormValidationService()
