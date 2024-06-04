import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";

export default function useDefaultThemeFonts() {
  const [isOswaldLoaded] = useOswald({ Oswald_400Regular });
  const [isLatoLoaded] = useLato({ Lato_400Regular });

  const areFontsLoaded = isOswaldLoaded && isLatoLoaded;

  return { areFontsLoaded };
}
