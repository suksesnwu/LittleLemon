import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LittleLemonFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.des}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
};

export default LittleLemonFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    marginBottom: 10,
  },
  des: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});
