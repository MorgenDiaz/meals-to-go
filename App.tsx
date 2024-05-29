import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>Search Area</Text>
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
