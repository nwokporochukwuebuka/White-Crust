import "./gesture-handler";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useContext, useEffect, useState } from "react";
import AnimationSplashScreen from "@/screens/splash-screen/AnimationSplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "@/navigations/RootNavigation";
import { getValueFor } from "@/utils/SecureStore";
import { AuthContext, AuthContextType } from "@/store/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const authCtx = useContext<AuthContextType>(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchToken = async (): Promise<void> => {
      try {
        const storedToken = await getValueFor("token");

        if (storedToken !== null || storedToken !== undefined) {
          authCtx.authenticate(storedToken!);
        }
      } catch (error) {
        Alert.alert(
          "Error",
          "There was an error launching this application, please restart this application"
        );
      }
    };

    fetchToken();
    setTimeout(() => {
      SplashScreen.hideAsync();
      setTimeout(() => {
        setIsLoading(true);
      }, 2500);
      setIsLoading(false);
    }, 800);
  }, []);

  if (isLoading) return <RootNavigation />;

  return (
    <SafeAreaProvider>
      <AnimationSplashScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
