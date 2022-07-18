import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Image, Keyboard, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-easy-icon'
import { MaskService, TextInputMaskOptionProp } from 'react-native-masked-text'

import { styles } from './style'
import { Strings } from '@constants'
import { globalStyle } from '@styles'
import Colors from '@styles/colors'
import {
  InputFormat,
  InputKeyboardType,
  InputValueResult,
  RunValidations,
  SetString,
  ValidationResult,
  ValidationRule,
} from '@types'
import { isUndefined } from 'lodash'

type InputProps = {
  autoCapitalize?: string
  errorStrings?: string[]
  format: InputFormat
  initialValue?: string
  keyboardType?: InputKeyboardType
  mask?: TextInputMaskOptionProp
  maxLength?: number
  placeholder?: string
  onChangeText?: any
  onFocus?: any
  onBlur?: any
  onUnmaskedText?: (value: string) => void
  pasteDisallowed?: boolean
  style?: object
  testId?: string
  validationRules?: ValidationRule[]
  onValidate?: (isValid: boolean, text: string) => void
  type?: string
  prefixImage?: string
  prefixText?: string
  postfixText?: string
  textInputStyle?: object
}

export const Input = forwardRef((props: InputProps, ref) => {
  const {
    placeholder,
    format,
    style,
    validationRules,
    errorStrings,
    initialValue,
    keyboardType,
    autoCapitalize = 'none',
    onFocus,
    testId = '',
    onChangeText,
    maxLength,
    pasteDisallowed,
    mask,
    onUnmaskedText,
    onValidate,
    type,
    onBlur,
    prefixImage,
    prefixText,
    postfixText,
    textInputStyle,
  } = props
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('')
  const [passwordShow, setPasswordShow] = useState(false)
  useImperativeHandle(ref, () => ({
    runValidations,
    setErrorString,
    clear,
    getValue,
    checkValue,
  }))
  const checkValue = (text: string): any => {
    if (text && mask) {
      if (type) {
        const maskedValue = MaskService.toMask(type, text, mask)
        const rawValue = MaskService.toRawValue(type, maskedValue, mask)
        setValue(maskedValue)
        text = maskedValue
        onUnmaskedText(rawValue)
      } else {
        const maskedValue = MaskService.toMask('custom', text, mask)
        const rawValue = MaskService.toRawValue('custom', maskedValue, mask)
        setValue(maskedValue)
        text = maskedValue
        onUnmaskedText(rawValue)
      }
    } else {
      setValue(text)
    }
    const result: ValidationResult[] = []
    let checkResult: ValidationResult
    const errorString = []
    if (validationRules) {
      for (let i = 0; i < validationRules.length; i += 1) {
        if (errorStrings?.length >= i)
          checkResult = validationRules[i](text, errorStrings[i])
        else checkResult = validationRules[i](text)
        if (!checkResult.success) {
          result.push(checkResult)
          errorString.push(Strings[checkResult.error] || checkResult.error)
        }
      }
    } else {
      checkResult = {
        success: true,
      }
      result.push(checkResult)
    }
    setError(errorString.join(',\n'))
    if (!isUndefined(onValidate)) {
      if (result.length === 0) {
        onValidate(true, text)
      } else {
        onValidate(false, text)
      }
    }

    return { value: text, result, isValid: result.length === 0 }
  }

  const runValidations: RunValidations = (): InputValueResult => {
    return checkValue(value)
  }

  const getValue = (): string | undefined => {
    let rawValue
    if (type && mask) {
      rawValue = MaskService.toRawValue(type, value, mask)
    } else {
      rawValue = value
    }
    return rawValue
  }

  const setErrorString: SetString = (errorString: string): void => {
    setError(errorString)
  }

  const clear = () => {
    setValue('')
  }

  const setType = (): string => {
    if (format === InputFormat.PASSWORD && !passwordShow) {
      return 'password'
    }
    if (format === InputFormat.NUMBER) return 'number'
    return 'text'
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <View>
      <View style={style || styles.inputBox}>
        {format === InputFormat.PHONE && (
          <View style={styles.prefixContainer}>
            <Image style={styles.prefiximage} source={prefixImage} />
            <Text style={[styles.prefixText, globalStyle.regular16]}>{prefixText}</Text>
            <View style={styles.horizontalDivider} />
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          style={[textInputStyle || style || styles.inputStyle]}
          onChangeText={(value): void => {
            checkValue(value)
            if (onChangeText) onChangeText(value)
          }}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={format === InputFormat.PASSWORD && !passwordShow}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          onBlur={onBlur}
          textContentType={'oneTimeCode'}
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
          testID={testId}
          placeholderTextColor={'rgba(255,255,255,0.6)'}
          maxLength={maxLength}
          contextMenuHidden={pasteDisallowed}
          autoCorrect={false}
        />
        <Text style={[styles.postfixText, globalStyle.regular16]}>{postfixText}</Text>
        {format === InputFormat.PASSWORD && (
          <Icon
            type='material-community'
            name={passwordShow ? 'eye-outline' : 'eye-off'}
            style={styles.icon}
            size={20}
            color={Colors.FluorescentBlue}
            onPress={() => setPasswordShow(!passwordShow)}
          />
        )}
      </View>

      {error?.length > 0 && (
        <Text style={styles.errorText}>
          {error.replace(Strings.OWN_IT, '')}
          {error.includes(Strings.OWN_IT) && (
            <Text style={styles.link} onPress={() => {}}>
              {Strings.OWN_IT}
            </Text>
          )}
        </Text>
      )}
    </View>
  )
})
