export interface Colors {
  brand: {
    primary: string;
    secondary: string;
    muted: string;
  };
  ui: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    error: string;
    success: string;
  };
  bg: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
    error: string;
    success: string;
  };
}

export interface Fonts {
  body: string;
  heading: string;
  monospace: string;
}

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface FontWeights {
  regular: FontWeight;
  medium: FontWeight;
  bold: FontWeight;
}

export interface FontSizes {
  caption: 12;
  button: 14;
  body: 16;
  title: 20;
  h5: 24;
  h4: 34;
  h3: 45;
  h2: 56;
  h1: 112;
}

export interface LineHeights {
  title: number;
  copy: number;
}

export interface Theme {
  colors: Colors;
  sizes: number[];
  space: number[];
  fonts: Fonts;
  fontWeights: FontWeights;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
}
