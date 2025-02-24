import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './LoginStack'
import AfterLoginNavigation from './AfterLoginNavigation'
import { useSelector } from 'react-redux'

const Navigation = () => {

    //Checks for the Logged in user details  
    const isLogin = useSelector((state) => state.userAuth.user || null);

  return (
    <NavigationContainer>
        {isLogin === null ? <LoginStack /> : <AfterLoginNavigation />}
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})