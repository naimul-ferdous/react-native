import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={20}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={30}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={40}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
