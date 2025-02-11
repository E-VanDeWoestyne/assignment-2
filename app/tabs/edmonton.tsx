import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";
import PopulationArea from "../../components/interests";
import PopularPlaces from "../../components/places";
export default function EdmontonScreen() {
  const population: number = 1.39;
  const area: number = 684.37;
  const places = [
    {
      name: "West Edmonton Mall",
      link: "https://maps.app.goo.gl/HrxKr1mR2YhkdBb87",
    },
    {
      name: "Fort Edmonton Park",
      link: "https://maps.app.goo.gl/oJF111DqJ3wnMVRBA",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Edmonton</Text>
      <Image
        source={{
          uri: "https://as2.ftcdn.net/v2/jpg/03/07/47/37/1000_F_307473763_pCHivHHXkz8Rw3eJTdSYeFHFOZLtV5fA.jpg",
        }}
        style={styles.image}
      />
      <Button
        title="Visit Edmonton"
        onPress={() => Linking.openURL("https://www.edmonton.ca/")}
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
