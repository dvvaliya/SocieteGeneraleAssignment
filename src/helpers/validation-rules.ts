import { InputErrorType, ValidationResult, ValidationRule } from '@types'

export const emailValidation: ValidationRule = (
  value: string,
  error = InputErrorType.VALID_EMAIL_ID
): ValidationResult => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (reg.test(value) === false) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}

export const valueRequired: ValidationRule = (
  value: string,
  error = InputErrorType.MISSING_VALUE
): ValidationResult => {
  if (value) return { success: true }
  return { success: false, error }
}

export const onlyDigits: ValidationRule = (
  value: string,
  error = InputErrorType.NO_SPECIAL_CHARACTERS_ALLOWED
): ValidationResult => {
  const reg = /^\d+$/
  const newValue = value.replace('$', '')
  if (reg.test(newValue)) {
    return { success: true }
  }
  return { success: false, error }
}

export const minLengthRequired: ValidationRule = (
  value: string,
  error = InputErrorType.PASSWORD_GREATER_THAN_EIGHT
): ValidationResult => {
  if (value.length < 8 || value.length > 20) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}

export const specialCharsRequired: ValidationRule = (
  value: string,
  error = InputErrorType.ONE_SPECIAL_CHARACTER_REQUIRED
): ValidationResult => {
  const reg = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/
  if (reg.test(value) === false) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}

export const upperCaseLetterRequired: ValidationRule = (
  value: string,
  error = InputErrorType.ONE_CAPITAL_LETTER_REQUIRED
): ValidationResult => {
  const reg = /[A-Z]/
  if (reg.test(value) === false) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}

export const lowerCaseLetterRequired: ValidationRule = (
  value: string,
  error = InputErrorType.ONE_SMALL_LETTER_REQUIRED
): ValidationResult => {
  const reg = /[a-z]/
  if (reg.test(value) === false) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}

export const notEmpty: ValidationRule = (
  value: string,
  error = InputErrorType.MISSING_VALUE
): ValidationResult => {
  if (value.length < 3 || value.length > 20) {
    return { success: false, error }
  } else {
    return { success: true }
  }
}
