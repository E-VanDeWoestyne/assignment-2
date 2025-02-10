import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Welcome(user: string) {
  const router = useRouter();

  const tabs = () => {
    router.replace("/tabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>

      <Pressable>
        <Text style={styles.textname} onPress={tabs}>
          Go to Tabs
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  textname: { fontSize: 20, fontWeight: "bold", color: "blue" },
});
