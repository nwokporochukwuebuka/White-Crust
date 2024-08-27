import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "@/store/AuthContext";
import AppNavigation from "./AppNavigation";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppNavigation />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
