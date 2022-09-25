import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
