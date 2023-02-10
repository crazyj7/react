import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { TabNavigator } from "./TabNavigator";

import CameraScreen from "./CameraScreen";
import SendScreen from "./SendScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  //Stack.setNavigationOption(navigationOptions)
  return (
    <Stack.Navigator initialRouteName="TabNavi">
      <Stack.Screen
        name="TabNavi"
        component={TabNavigator}
        options={({ navigation, route }) => ({
          title: "스타Star",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Icon.Button
              name="camera"
              size={30}
              color="#000"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: "#fff",
              }}
              onPress={() => {
                navigation.navigate("Camera");
              }}
            >
              {" "}
            </Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button
              name="send"
              size={30}
              color="#000"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: "#fff",
              }}
              onPress={() => {
                console.log("click! send!");
                navigation.navigate('SendScreen')
              }}
            >
              {" "}
            </Icon.Button>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
      <Stack.Screen name="SendScreen" component={SendScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
