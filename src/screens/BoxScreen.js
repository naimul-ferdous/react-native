import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};
export default BoxScreen;

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  viewOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    width: "30%",
    height: "50%",
  },
  viewTwoStyle: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    width: "30%",
    height: "50%",
    top: "26%",
  },
  viewThreeStyle: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    width: "30%",
    height: "50%",
  },
});
