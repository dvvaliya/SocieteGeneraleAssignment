import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './style'
import Colors from '@styles/colors'
import { OnClick } from '@types'
import Icon from 'react-native-easy-icon/src/index'

interface HeaderProps {
  title?: string
  isBackButtonVisible?: boolean
  onBackButtonPress?: OnClick
  addTopPadding?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  title = '',
  isBackButtonVisible = false,
  addTopPadding = true,
  onBackButtonPress,
}) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        addTopPadding ? styles.extraPadding : styles.emptyPadding,
        { paddingTop: Math.max(insets.top, 16) },
      ]}>
      <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
        <View style={styles.rowContainer}>
          {isBackButtonVisible && (
            <TouchableOpacity style={styles.headerBackButton} onPress={onBackButtonPress}>
              <View style={styles.headerBackButtonContainer}>
                <Icon
                  type='feather'
                  name='chevron-left'
                  color={Colors.lightGrey}
                  size={30}
                />
              </View>
            </TouchableOpacity>
          )}
          <Text style={[styles.headerBackTitle]}>{title}</Text>
        </View>
      </View>
    </View>
  )
}
