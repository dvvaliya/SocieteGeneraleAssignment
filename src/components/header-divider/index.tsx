import * as React from 'react'
import { View } from 'react-native'

import { styles } from './style'

interface HeaderDividerProps {
  backgroundColor?: string
}
export const HeaderDivider: React.FC<HeaderDividerProps> = ({backgroundColor}) => {
  return <View style={[styles.container,{backgroundColor:backgroundColor}]} />
}
