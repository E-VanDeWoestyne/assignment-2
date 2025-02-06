import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Sign_in from "../components/sign_in";
import Welcome from "../components/welcome";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  return (
    <View style={styles.container}>
      {isSignedIn ? (
        <Welcome username={username} />
      ) : (
        <Sign_in
          setIsSignedIn={setIsSignedIn}
          username={username}
          setUsername={setUsername}
        />
      )}
    </View>
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
