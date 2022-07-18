import * as React from 'react'

import { AuthStackParamList } from './stack-param-list'
import { Header } from '@components'
import { ROUTES } from '@constants'
import { SignInScreen } from '@containers'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from '@utils'

const Stack = createStackNavigator<AuthStackParamList>()
type AuthStackProps = {}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
