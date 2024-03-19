import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function SignInPage() {
  const router = useRouter();
  return (
    <View>
      <Text>SignInPage11111</Text>
      <Button title="Sign In" onPress={() => router.replace("/")} />
      <Button
        title="Sign Up Now"
        onPress={() => router.navigate("/auth/sign-up")}
      />
    </View>
  );
}
