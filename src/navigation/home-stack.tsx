import React from 'react'

import { Header } from '@components'
import { ROUTES, Strings } from '@constants'
import { HomeScreen } from '@containers'
import { headerStyle, HomeStackParamList } from '@navigation'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator<HomeStackParamList>()
type HomeStackProps = {}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerStyle: headerStyle,
          header: () => (
            <Header
              isBackButtonVisible={false}
              title={Strings.HOME}
              addTopPadding={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
