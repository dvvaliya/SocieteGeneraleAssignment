import React from 'react'
import { LogBox, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ROUTES } from '@constants'
import { AuthStack, HomeStack, headerOptionsWithoutBack } from '@navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '@styles/colors'
import { navigationRef } from '@utils'

const Stack = createStackNavigator()

export const AppNavigator = () => {
  console.disableYellowBox = true
  console.reportErrorsAsExceptions = false
  LogBox.ignoreLogs(['Warning: ...', 'Warning: Failed', 'Warning: Each']) // Ignore log notification by message
  LogBox.ignoreAllLogs() //Ignore all log notifications
  const routeNameRef = React.useRef()
  const insets = useSafeAreaInsets()
  const linking = {
    prefixes: [
      'appscheme://',
      'mx://',
      'myownitapp://',
      'https://consumer-user-pool-domain.auth.us-west-2.amazoncognito.com',
    ],
    config: {
      screens: {
        OnboardingStack: {
          screens: {
            OnboardingScreen: '/signout',
          },
        },
        AppScreen: {
          path: 'test',
        },
        AuthStack: {
          screens: {
            SignUpOptionsScreen: {
              path: '/login',
            },
            SignUpDetailsScreen: '/confirmUser',
          },
        },
        MXWidgetStack: {
          screens: {
            MXWidgetResultScreen: '/oauth_complete',
          },
        },
      },
    },
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name
      }}
      fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: Colors.darkThemeBlack },
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTES.AUTH_STACK}
          component={AuthStack}
          options={headerOptionsWithoutBack}
        />
        <Stack.Screen
          name={ROUTES.HOME_STACK}
          component={HomeStack}
          options={headerOptionsWithoutBack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export * from './stack-param-list'
export * from './auth-stack'
export * from './home-stack'
export * from './helper'
