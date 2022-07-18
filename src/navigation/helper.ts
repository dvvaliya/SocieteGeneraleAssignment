import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import Colors from '@styles/colors'
import { NavigationService } from '@utils'

export const styles = StyleSheet.create({
  headerBackTitle: {
    paddingTop: normalize(10),
    paddingLeft: normalize(20),
    fontSize: 23,
  },
  headerCloseIcon: {
    marginTop: normalize(5),
    marginRight: normalize(10),
  },
})

export const headerStyle = {
  backgroundColor: Colors.darkThemeBlack,
  shadowColor: 'transparent',
  elevation: 0,
}

export const headerOptionsWithBack = {
  title: '',
  headerLeft: '',
  headerStyle,
}

export const headerOptionsWithoutBack = {
  title: '',
  headerLeft: null,
  headerStyle,
  gestureEnabled: false,
}

export const referralStackStyles = StyleSheet.create({
  headerLeft: { color: Colors.lightGrey, paddingLeft: 10, paddingBottom: 15 },
  headerRight: { paddingBottom: 10, paddingRight: 10 },
})

export const headerOptionsDisabled = {
  headerStyle: headerStyle,
  headerShown: false,
}

export const globalNavigateBack = (prevToHome = false) => {
  if (!prevToHome) {
    NavigationService.goBack()
  }
  return true
}

export const screenOptionsDark = {
  cardStyle: { backgroundColor: Colors.darkThemeBlack },
}
