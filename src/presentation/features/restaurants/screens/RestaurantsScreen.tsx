import React, { useState, useContext, useMemo } from "react";
import { FlatList, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View, SafeAreaView } from "react-native";
import RestaurantInfo from "../components/RestaurantInfoCardComponent";
import { ThemeContext } from "../../../context/ThemeContext";
import { Theme } from "../../../../application/types";
import { Restaurant } from "../../../../domain/types";

const restaurants: Restaurant[] = [
  {
    name: "Paniolo Grill",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?cs=srgb&dl=pexels-samerdaboul-2233729.jpg&fm=jpg",
    ],
    address: "4631 Lehua St",
    isOpen: true,
    openingHours: "4:30PM",
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Paniolo Grill 2",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?cs=srgb&dl=pexels-samerdaboul-2233729.jpg&fm=jpg",
    ],
    address: "4631 Lehua St",
    isOpen: true,
    openingHours: "4:30PM",
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Paniolo Grill 3",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?cs=srgb&dl=pexels-samerdaboul-2233729.jpg&fm=jpg",
    ],
    address: "4631 Lehua St",
    isOpen: true,
    openingHours: "4:30PM",
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Paniolo Grill 4",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?cs=srgb&dl=pexels-samerdaboul-2233729.jpg&fm=jpg",
    ],
    address: "4631 Lehua St",
    isOpen: true,
    openingHours: "4:30PM",
    rating: 4,
    isClosedTemporarily: false,
  },
];

export default function RestaurantsScreen() {
  const theme = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");

  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          elevation={5}
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
        contentContainerStyle={styles.restaurantContainer}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

function createStyles(theme: Theme) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg.primary,
      marginTop: StatusBar && StatusBar.currentHeight,
    },
    searchContainer: {
      backgroundColor: theme.colors.bg.primary,
      padding: theme.space[3],
    },
    listContainer: {
      flex: 1,
      backgroundColor: theme.colors.bg.primary,
      padding: theme.space[3],
    },
    restaurantContainer: {
      rowGap: theme.space[3],
    },
  });

  return styles;
}
