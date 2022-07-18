import React from 'react'

import { globalStyle } from '@styles'
import { Image, Text, View } from 'react-native'
import { styles } from './style'
import { HeaderDivider } from '@components'
import Colors from '@styles/colors'

export interface ProductItemProps {
  image?: string
  title: string
  subTitle: string
}

export const ProductItem: React.FC<ProductItemProps> = ({ image, title, subTitle }) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={image} />
        <View style={globalStyle.marginLeft10}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{subTitle}</Text>
        </View>
      </View>
      <HeaderDivider backgroundColor={Colors.turkish_grey} />
    </>
  )
}
