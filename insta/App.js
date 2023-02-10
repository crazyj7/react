import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./src/StackNavigator";


export default function App() {
  //Stack.setNavigationOption(navigationOptions)
  return (
    <>
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>

  </>
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
