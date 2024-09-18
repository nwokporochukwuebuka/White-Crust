import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const { width, height, fontScale } = Dimensions.get("window");

const OnboardingItem = ({ item }: { item: any }) => {
  // console.log(item);
  return (
    <View style={styles.container} key={item.id}>
      <View style={styles.textContainer}>
        <Text style={styles.textOne}>{item.textOne}</Text>
        <Text style={styles.textTwo} numberOfLines={2}>
          {item.textTwo}
        </Text>
      </View>
      <View style={[styles.image, { width }]}>{item.image}</View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.1,
    height: height * 0.75,
    justifyContent: "space-around",
    zIndex: 1,
  },

  textContainer: {
    width: width * 0.7,
    marginLeft: width * 0.07,
    // borderWidth: 1,
    height: height * 0.15,
  },
  textOne: {
    color: "#fff",
    fontWeight: "600",
    fontSize: fontScale * 20,
  },
  textTwo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: fontScale * 45,
  },

  image: {
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "center",
    height: "70%",
  },
});
