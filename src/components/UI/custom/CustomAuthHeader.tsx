import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";

type CustomAuthHeaderProps = {
  text: string;
  onPress: () => void;
};

const CustomAuthHeader: FC<CustomAuthHeaderProps> = (
  props: CustomAuthHeaderProps
) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-back" />
        </View>
        <View style={styles.textContainer}>
          <Text>{props.text}</Text>
        </View>
      </View>
      <View style={styles.lineDivider} />
    </View>
  );
};

export default CustomAuthHeader;

const styles = StyleSheet.create({
  container: {},
  wrapper: {},
  iconContainer: {},
  textContainer: {},
  lineDivider: {},
});
