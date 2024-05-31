import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Restaurant } from "../../../domain/types";

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
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Title title={name} titleVariant="titleLarge" />
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "transparent",
  },
});
