import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsScreen from "./src/presentation/features/restaurants/screens/RestaurantsScreen";
import useDefaultThemeFonts from "./src/presentation/hooks/useDefaultThemeFonts";

export default function App() {
  const { areFontsLoaded } = useDefaultThemeFonts();

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
