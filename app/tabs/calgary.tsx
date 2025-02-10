import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";

export default function CalgaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Downtown_Calgary.jpg",
        }}
        style={styles.image}
      />
      <Button
        title="Visit Calgary"
        onPress={() => Linking.openURL("https://www.calgary.ca/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  image: { width: 300, height: 200, marginBottom: 10 },
});
