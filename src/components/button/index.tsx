import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import Icon from 'react-native-easy-icon'

import { styles } from './style'
import { IconType } from 'react-native-easy-icon/src/Icon'

export type RoundButtonProps = {
  active?: boolean
  onClick?: Function
  text?: string
  iconType?: IconType
  iconName?: string
  iconColor?: string
  buttonStyle?: ViewStyle
}

export const RoundButton: React.FC<RoundButtonProps> = (
  props: RoundButtonProps
): JSX.Element => {
  const { active, onClick, text, iconType, iconName, iconColor, buttonStyle } = props
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={!active}
      onPress={(e): void => onClick && onClick(e)}
      style={[active ? styles.activeContainer : styles.inactiveContainer, buttonStyle]}>
      {text && (
        <Text style={active ? styles.activeText : styles.inactiveText}>{text}</Text>
      )}
      {iconName && <Icon type={iconType} name={iconName} color={iconColor} size={30} />}
    </TouchableOpacity>
  )
}
