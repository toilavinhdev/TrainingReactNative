import { Redirect, Stack } from "expo-router";
import React, { useState } from "react";

export default function AuthLayout() {
  const [signedIn, setSignedIn] = useState(false);

  if (signedIn) {
    return <Redirect href="/" />;
  }

  return (
    <Stack initialRouteName="sign-in" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in"></Stack.Screen>
      <Stack.Screen name="sign-up"></Stack.Screen>
    </Stack>
  );
}
