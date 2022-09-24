import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello konnichiwa</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to componetns button"
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
