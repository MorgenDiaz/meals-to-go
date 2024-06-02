import { createContext } from "react";
import { Theme } from "../../application/types";

import {
  colors,
  sizes,
  space,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
} from "../theme";

const theme: Theme = {
  colors,
  sizes,
  space,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
};

export const ThemeContext = createContext<Theme>(theme);
