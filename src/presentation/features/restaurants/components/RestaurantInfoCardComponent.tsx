import React, { useContext, useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { Restaurant } from "../../../../domain/types";
import { Theme } from "../../../../application/types";
import { ThemeContext } from "../../../context/ThemeContext";
import { SvgXml } from "react-native-svg";
import Rating from "./Rating";
import open from "../../../../../assets/open";

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
    isOpen,
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
      <View style={styles.iconContainer}>
        <Rating rating={rating} />

        <View style={styles.detailsEnd}>
          {isClosedTemporarily ? (
            <Text style={styles.closedText}>Closed Temporarily</Text>
          ) : (
            isOpen && <SvgXml xml={open} style={styles.openIcon} />
          )}
          <Image style={styles.locationIcon} source={{ uri: icon }} />
        </View>
      </View>
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
    iconContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.space[3],
    },
    detailsEnd: {
      flexDirection: "row",
      gap: theme.space[2],
    },
    closedText: {
      fontFamily: theme.fonts.body,
      fontSize: theme.fontSizes.body,
      color: theme.colors.text.error,
    },
    openIcon: {
      width: theme.sizes[2],
      height: theme.sizes[2],
    },
    locationIcon: {
      width: theme.sizes[2],
      height: theme.sizes[2],
    },
  });
  return styles;
}
