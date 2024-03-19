import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-in"></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;
