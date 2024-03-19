import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = async () => {
    const api = process.env.EXPO_PUBLIC_API_URL + "/api/v1/user/sign-in" ?? "";
    try {
      await axios.post(api, {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error, api);
      return null;
    }
  };

  return (
    <View className="flex-1 items-center justify-center px-5">
      <Text className="font-bold text-[30px]">
        Sign In {email}; {password}
      </Text>
      <TextInput
        onChangeText={(val) => setEmail(val)}
        placeholder="Enter your email"
        className="p-3 border w-full"
      ></TextInput>
      <TextInput
        onChangeText={(val) => setEmail(val)}
        placeholder="Enter your password"
        className="p-3 border w-full mt-3"
      ></TextInput>
      <Button title="Sign In" onPress={async () => await onSignIn()} />
      <Button
        title="Sign Up Now"
        onPress={() => router.navigate("/auth/sign-up")}
      />
    </View>
  );
}
