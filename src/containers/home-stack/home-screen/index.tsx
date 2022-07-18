import React, { useEffect } from 'react'
import { View, FlatList, SafeAreaView, Alert } from 'react-native'

import { styles } from './style'
import { HomeStackNavProps } from '@navigation'
import { productsList } from './products'
import { Strings } from '@constants'
import messaging from '@react-native-firebase/messaging'
import { ProductItem } from '@components'

export const HomeScreen: React.FC<HomeStackNavProps<'HomeScreen'>> = ({
  navigation,
  route,
}) => {
  const checkToken = async () => {
    const fcmToken = await messaging().getToken()
    if (fcmToken) {
      console.log(fcmToken)
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
      messaging().sendMessage(remoteMessage)
    })

    return unsubscribe
  }, [])

  return (
    <SafeAreaView style={styles.parentContainer}>
      <View>
        <FlatList
          style={styles.flatList}
          data={productsList}
          renderItem={({ item }) => (
            <ProductItem
              image={item?.filename}
              title={item?.title}
              subTitle={Strings.PRICE.replace('X', `$${item?.price}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
