import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
const mname= "Naimul Ferdous"
  const greeting = <Text style={styles.subHeading}>My Name is {mname}</Text>;

  return (
    <View>
      <Text style={styles.text}>Getting started with react native</Text>
      {greeting}
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },

  subHeading: {
    fontSize: 30
  }
});
