import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
};

export default LittleLemonHeader;

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#F4CE14",
  },
  title: {
    padding: 40,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
