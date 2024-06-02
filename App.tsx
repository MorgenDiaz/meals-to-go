import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsScreen from "./src/presentation/features/restaurants/screens/RestaurantsScreen";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";

export default function App() {
  const [isOswaldLoaded] = useOswald({ Oswald_400Regular });
  const [isLatoLoaded] = useLato({ Lato_400Regular });

  if (!isOswaldLoaded || !isLatoLoaded) {
    return null;
  }

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
