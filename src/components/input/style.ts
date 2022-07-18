import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import { Typography } from '@styles'
import Colors from '@styles/colors'

export const styles = StyleSheet.create({
  inputStyle: {
    paddingTop: 19,
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.02,
    color: Colors.white,
    paddingBottom: 8,
    fontFamily: Typography.mue_500,
  },
  errorText: {
    marginTop: 8,
    color: Colors.maroon,
    fontSize: 14,
    fontFamily: Typography.mue_500,
  },
  inputBox: {
    flexDirection: 'row',
    borderBottomColor: Colors.pistachioGreen,
    borderBottomWidth: 1,
  },
  icon: {
    position: 'absolute',
    right: normalize(15),
    top: normalize(15),
  },
  prefiximage: {
    width: 36,
    maxHeight: 18,
  },
  link: {
    color: '#0390AC',
    textDecorationLine: 'underline',
  },
  prefixText: {
    color: Colors.white,
    marginLeft: 8,
  },
  postfixText: {
    color: Colors.white,
    position: 'absolute',
    right: normalize(5),
    top: normalize(25),
  },
  prefixContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 8,
  },
  horizontalDivider: {
    width: 2,
    backgroundColor: Colors.pistachioGreen,
    height: 18,
    marginLeft: 10,
    marginRight: 17,
  },
})
