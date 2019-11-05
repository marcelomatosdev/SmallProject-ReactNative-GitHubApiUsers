import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#123456",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Agora a parada ficou seria!</Text>
      <Text>Abaixo7</Text>
    </View>
  );
}
