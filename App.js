import * as React from "react";
import { StyleSheet, View } from "react-native";

// import local component
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <MenuItems />
      <View style={styles.innerFooterContainer}>
        {/*<LittleLemonFooter />*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  innerFooterContainer: {
    backgroundColor: "#495E57",
  },
});
