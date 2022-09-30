import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello konnichiwa</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to componetns demo"
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to images demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate("Square")}
      />

      <Button
        title="Go to Text demo"
        onPress={() => navigation.navigate("Text")}
      />

      <Button
        title="Go to Box demo"
        onPress={() => navigation.navigate("Box")}
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
