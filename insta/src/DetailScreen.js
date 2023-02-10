import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native";

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Detail </Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to MoreDetail"
        onPress={() => navigation.navigate("MoreDetail")}
      />
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
