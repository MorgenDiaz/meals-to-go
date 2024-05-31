import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RestaurantInfo from "../components/RestaurantInfoCardComponent";

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar && StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});
