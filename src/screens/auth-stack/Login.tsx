import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { removeValueFor } from "@/utils/SecureStore";
import CustomAuthHeader from "@/components/UI/custom/CustomAuthHeader";

const Login = () => {
  useEffect(() => {
    removeValueFor("viewed_onboarding");
  }, []);
  return (
    <SafeAreaView>
      <CustomAuthHeader
        text="Login"
        onPress={() => console.log("Back Button For Login")}
      />
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
