import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";
import PopulationArea from "../../components/interests";

export default function CalgaryScreen() {
  const population: number = 1.14;
  const area: number = 825.29;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Calgary</Text>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/481574937/photo/calgary-skyline.jpg?s=2048x2048&w=is&k=20&c=Nb7EAt6LpfcMi95s3DT0H-HtralMlAKJJaKAtxyRiFY=",
        }}
        style={styles.image}
      />
      <Button
        title="Visit Calgary"
        onPress={() => Linking.openURL("https://www.calgary.ca/home.html")}
      />
      <PopulationArea population={population} area={area} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  image: { width: 300, height: 200, marginBottom: 10 },
});
