import { StyleSheet } from 'react-native'

import Colors from '@styles/colors'
import { Typography } from '@styles'

export const styles = StyleSheet.create({
  parentContainer: { flex: 1, backgroundColor: Colors.darkThemeBlack },
  seperator: {
    flexDirection: 'row',
    backgroundColor: Colors.turkish_grey,
    height: 1,
    flex: 1,
    opacity: 0.6,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.darkThemeBlack,
  },
  mainContainer: {
    alignItems: 'center',
  },
  frontContainer: {
    flex: 1,
    backgroundColor: Colors.darkGunmetal,
    marginBottom: 20,
  },
  itemContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    color: Colors.white,
    fontFamily: Typography.mue_500,
    fontSize: 18,
  },
  price: {
    color: Colors.white,
    fontFamily: Typography.mue_300,
    fontSize: 14,
  },
  flatList: {
    marginHorizontal: 24,
  },
})
