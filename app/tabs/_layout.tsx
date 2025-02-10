import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="calgary"
        options={{
          title: "Calgary",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="building" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          title: "Edmonton",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="tree" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
