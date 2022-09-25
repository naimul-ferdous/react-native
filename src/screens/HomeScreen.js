import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
      <Button
        title="Go to images screen"
        onPress={() => navigation.navigate("Image")}
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
