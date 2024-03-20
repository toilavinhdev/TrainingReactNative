import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Root Layout
export default function AppLayout() {
  const insets = useSafeAreaInsets();
  const containerStyle = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <SafeAreaProvider>
      <View style={containerStyle}>
        <Slot />
      </View>
    </SafeAreaProvider>
  );
}
