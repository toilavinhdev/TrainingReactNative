import { View, Text } from "react-native";
import React, { useState } from "react";
import { Redirect } from "expo-router";

export default function AppLayout() {
  const [signedIn, setSignedIn] = useState(false);

  if (!signedIn) {
    return <Redirect href="/auth" />;
  }

  return (
    <View>
      <Text>AppLayout</Text>
    </View>
  );
}
