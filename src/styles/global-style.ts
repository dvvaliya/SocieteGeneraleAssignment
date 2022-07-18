import { StyleSheet } from 'react-native'

import Colors from './colors'
import Typography from '@styles/typography'

export const globalStyle = StyleSheet.create({
  manropeRegular16: {
    color: '#44476D',
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
  },
  alignSelfCenter: { alignSelf: 'center' },
  alignItemsEnd: { alignItems: 'flex-end' },
  alignSelfEnd: { alignSelf: 'flex-end' },
  flexRow: { flexDirection: 'row' },
  flexSpaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  flexColumn: { flexDirection: 'column' },
  flexCenter: { alignItems: 'center', justifyContent: 'center' },
  pBottom30: { paddingBottom: 30 },
  pTop10: { paddingTop: 10 },
  pTop24: { paddingTop: 24 },
  width100: { width: '100%' },
  pVertical20: {
    paddingVertical: 20,
  },
  pVertical10: {
    paddingVertical: 10,
  },
  regular20: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  regular18: {
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  regular16: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  regular14: {
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  regular12: {
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  regular32Mue: {
    fontSize: 32,
    fontFamily: Typography.mue_300,
  },
  semibold24: {
    fontSize: 24,
    fontWeight: '500',
  },
  semibold20: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  semibold18: {
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  semibold16: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: Typography.mue_500,
  },
  semibold14: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: Typography.mue_500,
  },
  semibold16Mue: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: Typography.mue_500,
  },
  semibold12: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  semibold13: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: Typography.mue_500,
  },
  bold24: {
    fontSize: 24,
    fontFamily: Typography.mue_700,
  },
  bold20: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: Typography.mue_700,
  },
  semibold30: {
    fontSize: 30,
    fontFamily: Typography.mue_500,
  },
  bold18: {
    fontSize: 18,
    fontFamily: Typography.mue_700,
  },
  bold18White: {
    fontSize: 18,
    fontFamily: Typography.mue_700,
    color: Colors.white,
  },
  bold16: {
    fontSize: 16,
    fontFamily: Typography.mue_700,
  },
  bold14: {
    fontSize: 14,
    color: '#002117',
    fontFamily: Typography.mue_700,
  },
  bold12: {
    fontSize: 12,
    color: '#002117',
    fontFamily: Typography.mue_700,
  },
  semiBoldOpenSans14: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Typography.mue_500,
    lineHeight: 19,
    color: Colors.blackish_shade,
  },
  flexRowAlignCenter: { flexDirection: 'row', alignItems: 'center' },
  flexColumnAlignCenter: { flexDirection: 'column', alignItems: 'center' },
  marginVertical5: {
    marginVertical: 5,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginVertical20: {
    marginVertical: 20,
  },
  paddingTop100: { paddingTop: 100 },
  alignCenter: { alignItems: 'center' },
  center: { alignItems: 'center', justifyContent: 'center' },
  marginTop10: {
    marginTop: 10,
  },
  marginTop4: {
    marginTop: 4,
  },
  marginTop13: {
    marginTop: 13,
  },
  marginB10: { marginBottom: 10 },
  fontColorBlack: { color: Colors.black },
  marginB45: { marginBottom: 45 },
  marginB15: { marginBottom: 15 },
  marginB13: { marginBottom: 13 },
  marginB20: { marginBottom: 20 },
  marginB50: { marginBottom: 50 },
  marginTop60: { marginTop: 60 },
  marginTop24: { marginTop: 24 },
  marginTop32: { marginTop: 32 },
  marginTop20: { marginTop: 20 },
  marginTop23: { marginTop: 23 },
  marginTop40: { marginTop: 40 },
  marginTop50: { marginTop: 50 },
  marginTop59: { marginTop: 59 },
  marginTop15: { marginTop: 15 },
  marginTop16: { marginTop: 16 },
  marginLeft0: { marginLeft: 0 },
  marginLeft10: { marginLeft: 10 },
  marginLeft20: { marginLeft: 20 },
  marginLeft50: { marginLeft: 50 },
  paddingLeft20: { paddingLeft: 20 },
  paddingRight20: { paddingRight: 20 },
  marginRight10: { marginRight: 10 },
  marginHorizontal25: { marginHorizontal: 25 },
  marginHorizontal10: { marginHorizontal: 15 },
  flex1: { flex: 1 },
  circleButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#309EA2',
    shadowColor: '#081A1B26',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  errorText: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: Typography.mue_500,
    color: Colors.maroon,
  },
  pistachioGreenText: {
    color: Colors.pistachioGreen,
  },
  whiteText: {
    color: Colors.white,
  },
  greyText: {
    color: Colors.lightGrey,
  },
  appContainer: {
    flex: 1,
    backgroundColor: Colors.darkThemeBlack,
  },
  stitchCreditLogo: {
    alignSelf: 'center',
    height: 21,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  spinnerTextStyle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: Typography.mue_500,
  },
  width50: {
    width: '50%',
  },
  textCenter: {
    textAlign: 'center',
  },
})
