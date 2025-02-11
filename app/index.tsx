import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Sign_in from "../components/sign_in";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setIsSignedIn(true);
    router.replace("/welcome");
  };

  return (
    <View style={styles.container}>
      {isSignedIn ? null : (
        <Sign_in
          setIsSignedIn={handleLogin}
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
