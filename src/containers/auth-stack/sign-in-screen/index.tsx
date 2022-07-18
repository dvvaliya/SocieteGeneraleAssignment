import React, { useRef, useState } from 'react'
import { Alert, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'

import { styles } from './style'
import { AuthErrorCodes, ROUTES, Strings } from '@constants'
import { AuthStackNavProps } from '@navigation'
import { ButtonFormat, InputFormat } from '@types'
import { globalStyle } from '@styles'
import { Input, RoundButton } from '@components'
import { emailValidation, minLengthRequired } from '@helpers'
import _ from 'lodash'
import Colors from '@styles/colors'
import auth from '@react-native-firebase/auth'
import { useDispatch } from 'react-redux'
import { setSignIn } from '../../../redux/slices/authSlice'
import Spinner from 'react-native-loading-spinner-overlay'

export const SignInScreen: React.FC<AuthStackNavProps<'SignInScreen'>> = ({
  navigation,
  route,
}) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [validate, setValidate] = useState([
    {
      type: InputFormat.EMAIL,
      isValid: false,
    },
    {
      type: InputFormat.PASSWORD,
      isValid: false,
    },
  ])

  const updateInputValidation = (type: string, valid: boolean) => {
    const inputValidation = [...validate]
    inputValidation.find(value => value.type === type && ((value.isValid = valid), true))
    setValidate(inputValidation)
  }

  const handleLogin = () => {
    const user = {
      isLoggedIn: true,
      email: emailRef?.current?.getValue(),
      userName: 'test',
    }

    dispatch(setSignIn(user))
  }

  const loginWithEmail = () => {
    setLoading(true)
    auth()
      .signInWithEmailAndPassword(
        emailRef?.current?.getValue(),
        passwordRef?.current?.getValue()
      )
      .then(user => {
        handleLogin()
        setLoading(false)
        navigation.replace(ROUTES.HOME_STACK)
      })
      .catch(error => {
        setLoading(false)
        const errors = AuthErrorCodes.find(value => value.code === error.code)
        Alert.alert(Strings.ERROR, errors?.error)
      })
  }

  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView style={styles.childContainer}>
          <Text style={styles.helloText}>{Strings.SIGN_IN_WELCOME_BACK}</Text>
          <Text style={styles.signUpTitle}>{Strings.SIGN_IN_TITLE}</Text>
          <View>
            <View style={[globalStyle.pBottom30, globalStyle.marginTop50]}>
              <Text style={styles.emailText}>{Strings.ENTER_EMAIL_PASSWORD}</Text>
              <Input
                ref={emailRef}
                format={InputFormat.EMAIL}
                initialValue={''}
                onUnmaskedText={() => {}}
                placeholder={Strings.EMAIL_1}
                validationRules={[emailValidation]}
                onValidate={isValid => updateInputValidation(InputFormat.EMAIL, isValid)}
              />
              <Input
                ref={passwordRef}
                format={InputFormat.PASSWORD}
                initialValue={''}
                onUnmaskedText={() => {}}
                placeholder={Strings.PASSWORD}
                validationRules={[minLengthRequired]}
                maxLength={20}
                onValidate={isValid =>
                  updateInputValidation(InputFormat.PASSWORD, isValid)
                }
              />
            </View>
          </View>
          <View
            style={[
              globalStyle.flexRow,
              globalStyle.alignSelfCenter,
              globalStyle.marginTop60,
            ]}>
            <RoundButton
              iconType='material-community'
              iconName='arrow-right'
              iconColor={Colors.black}
              onClick={() => loginWithEmail()}
              active={validate.every(element => element.isValid)}
              format={ButtonFormat.LOGIN}
            />
          </View>
          <Spinner
            animation='fade'
            visible={isLoading}
            color={Colors.FluorescentBlue}
            overlayColor={Colors.darkThemeBlack}
            textContent={Strings.LOADING}
            textStyle={globalStyle.spinnerTextStyle}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}
