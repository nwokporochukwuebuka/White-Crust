import React from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

interface PaginatorProps {
  data: any[];
  scrollX: Animated.Value;
}

const { height, width } = Dimensions.get("window");

const Paginator: React.FC<PaginatorProps> = ({ data, scrollX }) => {
  const dotPosition = Animated.divide(scrollX, width);
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const backgroundColor = dotPosition.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: ["#fff", "#FFD700", "#fff"], // Grey when inactive, yellow when active
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dotCover, { borderColor: backgroundColor }]}
          >
            <Animated.View
              key={i.toString()}
              style={[styles.dot, { backgroundColor }]} // Only control the background color via animation
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "flex-start",
    // marginTop: -200,
  },
  dotCover: {
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#fff", // Default color is grey
    // padding: 10,
  },
});
