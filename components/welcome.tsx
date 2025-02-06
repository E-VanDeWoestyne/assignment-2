import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

type WelcomeProps = { username: string };

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {username} my App</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
