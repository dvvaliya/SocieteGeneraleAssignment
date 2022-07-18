import { StyleSheet } from 'react-native'

import { Typography } from '@styles'
import Colors from '@styles/colors'

export const styles = StyleSheet.create({
  parentContainer: { flex: 1, backgroundColor: Colors.darkThemeBlack },
  childContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
    marginTop: 30,
    justifyContent: 'center',
  },
  scrollContainer: { flex: 1 },
  helloText: {
    fontSize: 32,
    alignSelf: 'flex-start',
    fontFamily: Typography.mue_500,
    color: Colors.pistachioGreen,
  },
  emailText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Typography.mue_700,
    marginBottom: 10,
  },
  signUpTitle: {
    fontSize: 32,
    alignSelf: 'flex-start',
    marginTop: 10,
    fontFamily: Typography.mue_300,
    color: Colors.mercury,
  },
})
