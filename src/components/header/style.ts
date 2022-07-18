import { StyleSheet } from 'react-native'
import normalize from 'react-native-normalize'

import { Typography } from '@styles'
import Colors from '@styles/colors'

export const styles = StyleSheet.create({
  container: {
    paddingLeft: normalize(10),
    paddingRight: normalize(20),
    paddingBottom: normalize(20),
    backgroundColor: Colors.darkThemeBlack,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBackButton: {},
  headerBackButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerBackTitle: {
    textAlign: 'center',
    flex: 1,
    opacity: 0.7,
    marginLeft: 5,
    color: Colors.white,
    fontSize: 20,
    fontFamily: Typography.mue_700,
  },
  headerCloseIcon: {},
  divider: { width: '100%' },
  iconRowContainer: {
    flexDirection: 'row',
  },
  extraPadding: { paddingTop: normalize(25) },
  emptyPadding: { paddingTop: 0, paddingLeft: 0 },
  stepperContainer: { paddingTop: normalize(25) },
})

export const customStepperStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: '#4FB5B9',
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: '#4FB5B9',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4FB5B9',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4FB5B9',
  stepIndicatorUnFinishedColor: '#F2F2F2',
  stepIndicatorCurrentColor: '#F2F2F2',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#4FB5B9',
  stepIndicatorLabelFinishedColor: '#F2F2F2',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#4FB5B9',
}
