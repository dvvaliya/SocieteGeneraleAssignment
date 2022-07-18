import { StyleSheet, Text, View } from 'react-native'
import normalize from 'react-native-normalize'

import { Typography } from '@styles'
import Colors from '@styles/colors'
import styled from 'styled-components'

export const MText = styled(Text)`
  color: ${(props: any) => props.color};
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: ${Typography.mue_500};
`

export const MView = styled(View)`
  flex-direction: row;
  border-radius: 24px;
  margin: 5px 0px 5px 0px;
  background-color: ${(props: any) => props.backgroundColor};
  border-color: ${(props: any) => {
    switch (props.format) {
    }
  }};
  border-width: 1px;
  align-items: center;
  justify-content: center;
  height: ${(props: any) => props.height}px;
  opacity: ${(props: any) => (props.disabled ? 0.5 : 1)};
`

export const styles = StyleSheet.create({
  iconRightMargin: {
    marginRight: normalize(13),
  },
  google: {
    marginRight: normalize(13),
  },
  activeText: {
    color: Colors.black,
    fontSize: 16,
    lineHeight: 23,
    fontFamily: Typography.mue_700,
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
  },
  inactiveText: {
    color: Colors.blackish_shade,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    fontFamily: Typography.mue_700,
  },
  activeContainer: {
    paddingHorizontal: 38,
    paddingVertical: 10,
    backgroundColor: Colors.FluorescentBlue,
    borderRadius: 32,
    alignSelf: 'flex-start',
    textAlign: 'center',
    marginTop: 40,
  },
  inactiveContainer: {
    paddingHorizontal: 38,
    paddingVertical: 10,
    backgroundColor: Colors.lightGreyText,
    borderRadius: 32,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  mView: {
    flexDirection: 'row',
    borderRadius: 24,
    marginVertical: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
