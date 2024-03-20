import { Redirect, Stack } from "expo-router";
import React, { useState } from "react";

export default function AuthLayout() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in"></Stack.Screen>
      <Stack.Screen name="sign-up"></Stack.Screen>
    </Stack>
  );
}
