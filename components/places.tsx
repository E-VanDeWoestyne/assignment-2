import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

interface PopularPlacesProps {
  places: { name: string; link: string }[];
}

const PopularPlaces: React.FC<PopularPlacesProps> = ({ places }) => {
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Places to Visit</Text>

      {places.map((place, index) => (
        <TouchableOpacity
          key={index}
          style={styles.placeBox}
          onPress={() => openLink(place.link)}
        >
          <Text style={styles.placeName}>{place.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  placeBox: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    minWidth: 200,
    alignItems: "center",
  },
  placeName: {
    fontSize: 16,
    color: "#fff",
  },
});

export default PopularPlaces;
