import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PopulationAreaProps {
  population: number;
  area: number;
}

const PopulationArea: React.FC<PopulationAreaProps> = ({
  population,
  area,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Population</Text>
        <Text style={styles.value}>{population.toLocaleString()} Million</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Area</Text>
        <Text style={styles.value}>{area.toLocaleString()} km²</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  box: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    minWidth: 120,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    margin: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: "#007BFF",
  },
});

export default PopulationArea;
