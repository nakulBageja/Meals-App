import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import MealsNavigator from "./navigation/MealsNavigation";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  const [loaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) return null;
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
