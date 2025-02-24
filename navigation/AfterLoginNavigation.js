import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Passcode from "../screens/Passcode";
import { useSelector } from "react-redux";
import MainStackNavigation from "./MainStackNavigation";

const Stack = createNativeStackNavigator();

const AfterLoginNavigation = () => {
  const hasPasscode = useSelector(state => state.userAuth.hasPasscode)

  return (
    <>
      {!hasPasscode ? (
        <Stack.Navigator
          initialRouteName="Passcode"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Passcode" component={Passcode} />
        </Stack.Navigator>
      ) : (
        <MainStackNavigation />
      )}
    </>
  );
};

export default AfterLoginNavigation;

const styles = StyleSheet.create({});
