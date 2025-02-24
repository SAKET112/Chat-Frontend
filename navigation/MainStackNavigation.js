import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigation from './BottomTabNavigation'

    const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={BottomTabNavigation} />
    </Stack.Navigator>
  )
}

export default MainStackNavigation