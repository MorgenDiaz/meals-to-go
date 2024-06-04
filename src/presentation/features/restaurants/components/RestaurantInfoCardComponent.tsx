import React, { useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Restaurant } from "../../../../domain/types";
import { Theme } from "../../../../application/types";
import { ThemeContext } from "../../../context/ThemeContext";
import Rating from "./Rating";

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export default function RestaurantInfoCard({
  restaurant,
}: RestaurantInfoProps) {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const theme = useContext(ThemeContext);
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title
        title={name}
        subtitle={address}
        titleVariant="titleLarge"
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Rating rating={rating} />
    </Card>
  );
}
//create empty iterable and map to svgs?
//
function createStyles(theme: Theme) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.bg.primary,
    },
    title: {
      fontFamily: theme.fonts.heading,
      fontSize: theme.fontSizes.body,
      color: theme.colors.ui.primary,
    },
    subtitle: {
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes.caption,
      color: theme.colors.ui.primary,
    },
    cover: {
      padding: theme.space[3],
      backgroundColor: "transparent",
    },
  });
  return styles;
}
