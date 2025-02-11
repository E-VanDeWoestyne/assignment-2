import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import credentials from "../credentials.json";
import { Link, useRouter } from "expo-router";

type Sign_inProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
};

const Sign_in: React.FC<Sign_inProps> = ({
  setIsSignedIn,
  username,
  setUsername,
}) => {
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Find if username exists
    const userExists = credentials.users.some(user => user.username === username);
    if (!userExists) {
      alert("Username does not exist");
      return;
    }
    
    const user = credentials.users.find(
      (user) => user.username == username && user.password == password
    );
    if (user) {
      setIsSignedIn(true);
    } else {
      alert("Incorrect password"); //sign in can only fail due to incorrect password at this stage
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Link href={"/recoverPassword"}>
        <Text>Password recovery</Text>
      </Link>
    </View>
  );
};

export default Sign_in;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
