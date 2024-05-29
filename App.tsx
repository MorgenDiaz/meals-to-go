import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            elevation={2}
          />
        </View>
        <View style={styles.listContainer}>
          <Text>List area</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 20,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});
