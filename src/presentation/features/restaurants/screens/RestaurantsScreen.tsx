import React, { useState, useContext, useMemo } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RestaurantInfo from "../components/RestaurantInfoCardComponent";
import { ThemeContext } from "../../../context/ThemeContext";
import { Theme } from "../../../../application/types";

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
      <View style={styles.listContainer}>
        <RestaurantInfo
          restaurant={{
            name: "Paniolo Grill",
            icon: "testiconurl",
            photos: [
              "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?cs=srgb&dl=pexels-samerdaboul-2233729.jpg&fm=jpg",
            ],
            address: "4631 Lehua St",
            openingHours: "4:30PM",
            rating: 4,
            isClosedTemporarily: false,
          }}
        />
      </View>
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
  });

  return styles;
}
