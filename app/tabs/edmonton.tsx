import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";

export default function EdmontonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Edmonton</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Edmonton_cityscape.jpg",
        }}
        style={styles.image}
      />
      <Button
        title="Visit Edmonton"
        onPress={() => Linking.openURL("https://www.edmonton.ca/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  image: { width: 300, height: 200, marginBottom: 10 },
});
