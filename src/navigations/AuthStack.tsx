import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "@/screens/auth-stack/Onboarding";
import Login from "@/screens/auth-stack/Login";
import { getValueFor } from "@/utils/SecureStore";
import { ActivityIndicator } from "react-native";
import DefaultRegistration from "@/screens/auth-stack/registration";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [viewOnboarding, setViewOnboarding] = useState<boolean>();

  useEffect(() => {
    (async () => {
      try {
        const value = await getValueFor("viewed_onboarding");
        if (value !== null) {
          setViewOnboarding(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <ActivityIndicator size={"large"} color={"#263BD4"} />;
  }

  return (
    <Stack.Navigator
      initialRouteName={viewOnboarding ? "login" : "onboarding"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="onboarding" component={Onboarding} />
      <Stack.Screen
        name="default_registration"
        component={DefaultRegistration}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
