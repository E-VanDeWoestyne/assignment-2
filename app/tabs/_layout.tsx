import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="calgary"
        options={{
          title: "Calgary",
          tabBarIcon: ({}) => (
            <Image
              source={{
                uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseekflag.com%2Fwp-content%2Fuploads%2F2021%2F12%2FCalgary-Flag-01-1.png&f=1&nofb=1&ipt=bedad47d46a0051059e461f6ea09c3d24890e6d0a94b6b7ade80ac392766b9b8&ipo=images",
              }}
              style={styles.image}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="edmonton"
        options={{
          title: "Edmonton",
          tabBarIcon: ({}) => (
            <Image
              source={{
                uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fshop.flagshop.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F9df78eab33525d08d6e5fb8d27136e95%2Ff%2Fl%2Fflag-canada-edmonton_1.gif&f=1&nofb=1&ipt=bdcbb0151c4c4d51d44283bb4a5edda70047b2fb10702fbcb888a8520d88b0d9&ipo=images",
              }}
              style={styles.image}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginBottom: 5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
  },
});
