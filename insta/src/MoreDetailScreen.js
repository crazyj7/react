import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native";

export default function MoreDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> MoreDetail </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
