import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { FC, useEffect, useRef } from "react";
import WhiteCrustLogo from "@assets/background-image/whitecrust-logo.svg";
import { LinearProgress } from "@rneui/themed";

const { width, height } = Dimensions.get("window");

const AnimationSplashScreen: FC = () => {
  const scrollAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    const startScrolling = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scrollAnim, {
            toValue: -height,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(scrollAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startScrolling();
  }, [scrollAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@assets/splash.png")}
        style={{ height, width }}
        resizeMode="contain"
      >
        <Animated.Image
          source={require("@assets/splash.png")}
          resizeMode={"cover"}
          style={[
            styles.backgroundImage,
            {
              transform: [{ translateY: scrollAnim }],
            },
          ]}
        />
        <View style={styles.logoContainer}>
          <WhiteCrustLogo width={width * 0.65} />
          <LinearProgress color="#DDD775" style={styles.linearProgress} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AnimationSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height * 2,
    width,
  },
  backgroundImage: {
    position: "absolute",
  },
  logoContainer: {
    alignSelf: "center",
    marginTop: height * 0.4,
  },
  linearProgress: {
    marginTop: -15,
    height: height * 0.006,
    width: width * 0.55,
    alignSelf: "center",
  },
});
