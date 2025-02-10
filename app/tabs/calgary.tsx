import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";

export default function CalgaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary</Text>
      <Image
        source={{
          uri: "https://www.istockphoto.com/photo/calgary-skyline-gm481574937-36897530?searchscope=image%2Cfilm",
        }}
        style={styles.image}
      />
      <Button
        title="Visit Calgary"
        onPress={() => Linking.openURL("https://www.calgary.ca/home.html")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  image: { width: 300, height: 200, marginBottom: 10 },
});
