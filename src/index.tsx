import React from 'react'
import { View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { AppNavigator } from './navigation'
import { globalStyle } from '@styles'
import { store } from './redux/store'

export const Root = ({}) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider
        initialMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}>
        <View style={globalStyle.appContainer}>
          <AppNavigator />
        </View>
      </SafeAreaProvider>
    </Provider>
  )
}

export default Root
