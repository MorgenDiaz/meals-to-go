import React from "react";
import { Text as NativeText, StyleSheet, TextStyle } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../application/types";

type TextProps = {
  variant: "body" | "label" | "caption" | "error" | "hint";
  children: React.ReactNode;
};

export default function Text({ variant = "body", children }: TextProps) {
  const theme = useContext(ThemeContext);
  const textStyles = variants[variant](theme);

  return <NativeText style={textStyles}>{children}</NativeText>;
}

function createDefaultTextStyle(theme: Theme): TextStyle {
  return {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.regular,
    color: theme.colors.text.primary,
    flexWrap: "wrap",
    marginTop: 0,
    marginBottom: 0,
  };
}

function body(theme: Theme) {
  const defaults = createDefaultTextStyle(theme);
  const bodyStyles = { ...defaults, fontSize: theme.fontSizes.body };
  return bodyStyles;
}

function label(theme: Theme) {
  const defaults = createDefaultTextStyle(theme);
  const labelStyles = {
    ...defaults,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.medium,
  };
  return labelStyles;
}

function caption(theme: Theme) {
  const defaults = createDefaultTextStyle(theme);
  const captionStyles = {
    ...defaults,
    fonstSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeights.bold,
  };
  return captionStyles;
}

function error(theme: Theme) {
  const defaults = createDefaultTextStyle(theme);
  const errorStyles = { ...defaults, color: theme.colors.text.error };
  return errorStyles;
}

function hint(theme: Theme) {
  const defaults = createDefaultTextStyle(theme);
  const hintStyles = { ...defaults, fontSize: theme.fontSizes.body };
  return hintStyles;
}

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};
