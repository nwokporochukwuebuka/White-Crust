import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";

type CustomButtonProps = {
  text: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  disabled?: boolean;
  onPress: () => void;
};

const { width } = Dimensions.get("window");

const CustomButton: FC<CustomButtonProps> = ({
  text,
  textColor,
  backgroundColor,
  borderColor,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, { backgroundColor, borderColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    paddingHorizontal: "auto",
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
  },
});
