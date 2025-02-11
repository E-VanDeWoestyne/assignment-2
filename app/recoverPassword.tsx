import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordRecovery = () => {
    if (email) {
      Alert.alert(
        "Password Recovery",
        `Instructions to recover your password have been sent to ${email}`
      );
    } else {
      Alert.alert("Error", "Please enter a valid email address");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Recover Password" onPress={handlePasswordRecovery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RecoverPassword;
