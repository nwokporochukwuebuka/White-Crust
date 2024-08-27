import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Animated,
  ImageBackground,
  View,
} from "react-native";

import slides from "@/utils/slides";
import OnboardingItem from "../../components/onboarding/OnboardingItem";
import Paginator from "../../components/onboarding/Paginator";
import { save } from "@/utils/SecureStore";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/UI/custom/CustomButton";

const { width, height } = Dimensions.get("window");

interface OnboardingProps {
  navigation: any;
}

const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<any>>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const setOnboardingDone = async () => {
    try {
      await save("viewed_onboarding", "true");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOnboardingDone();
  }, []);

  return (
    <>
      <StatusBar />
      <ImageBackground
        source={require("@assets/splash.png")}
        style={styles.container}
        resizeMode="contain"
      >
        <FlatList
          style={{ zIndex: 1 }}
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          bounces={false}
          keyExtractor={(item) => item.id.toString()} // Convert item.id to string
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <Paginator data={slides} scrollX={scrollX} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton
              text="Create account"
              textColor="#263BD4"
              backgroundColor="#FFFFFF"
              borderColor="transparent"
              onPress={() => navigation.navigate("default_registration")}
            />
          </View>
          <View style={styles.button}>
            <CustomButton
              onPress={() => navigation.navigate("login")}
              text="Login"
              textColor="#fff"
              backgroundColor="transparent"
              borderColor="#FFFFFF"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
  },

  buttonContainer: {
    height: height * 0.21,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 7,
  },
});
