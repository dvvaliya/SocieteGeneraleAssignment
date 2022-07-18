import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type AuthStackParamList = {
  SignInScreen: {
    code: string | undefined
    state: string | undefined
  }
}

export type AuthStackNavProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>
  route: RouteProp<AuthStackParamList, T>
}
export type HomeStackParamList = {
  HomeScreen: {
    update: boolean
  }
}

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>
  route: RouteProp<HomeStackParamList, T>
}
