import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext, AuthContextType } from "@/store/AuthContext";
import AuthStack from "./AuthStack";
import AuthenticatedStack from "./AuthenticatedStack";

const AppNavigation = () => {
  const authCtx = useContext<AuthContextType>(AuthContext);

  return (
    <>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </>
  );
};

export default AppNavigation;
