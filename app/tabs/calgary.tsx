import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";
import PopulationArea from "../../components/interests";
import PopularPlaces from "../../components/places";

export default function CalgaryScreen() {
  const population: number = 1.14;
  const area: number = 825.29;
  const places = [
    {
      name: "Calgary Tower",
      link: "https://maps.app.goo.gl/c5FMmFFbuCJBc9H28",
    },
    {
      name: "Calgary Zoo",
      link: "https://maps.app.goo.gl/rqrCNWi18L95ztQ48",
    },
  ];
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
      <PopularPlaces places={places} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
  image: { width: 300, height: 200, marginBottom: 10 },
});
