import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Scan from "../screens/Scan";
import Profile from "../screens/Profile";

const screenOptions = {
  tabVarShowLabel: false,
  tabBarHideKeyword: true,
  headerShown: false,
  tabBarStyles: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                size={24}
                color={focused ? "#2A4D50" : "#C1C0C8"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={focused ? "scan-circle-sharp" : "scan-circle-outline"}
                size={24}
                color={focused ? "#2A4D50" : "#C1C0C8"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            tabBarIcon: ({ focused, color }) => {
                return (
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={24}
                    color={focused ? "#2A4D50" : "#C1C0C8"}
                  />
                )
              },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
