import axios, { AxiosError } from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const onSignIn = (email: string, password: string) => {
  const api = `${process.env.EXPO_PUBLIC_API_URL}/api/v1/user/sign-in`;
  axios
    .post(api, { email, password })
    .then((val) => console.log(email, password, val.data))
    .catch((err: AxiosError) => console.log(api, err.response?.data));
};

export default function SignInScreen() {
  const [email, setEmail] = useState<string>("hoangdvinh68@gmail.com");
  const [password, setPassword] = useState<string>("Password@123");
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-[20px]">
        Sign In {email}:{password}
      </Text>
      <View className="w-full px-12">
        <Text>Email:</Text>
        <TextInput
          className="border py-1 px-3 w-full"
          value={email}
          onChangeText={(val) => setEmail(val)}
        ></TextInput>
      </View>
      <View className="w-full px-12 mt-3">
        <Text>Password:</Text>
        <TextInput
          className="border py-1 px-3 w-full"
          value={password}
          onChangeText={(val) => setPassword(val)}
        ></TextInput>
      </View>
      <TouchableOpacity
        className="w-[300px] bg-blue-500 rounded-lg mt-4"
        onPress={async () => {
          // onSignIn(email, password);
          router.replace("/");
        }}
      >
        <Text className="text-center py-3">Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-[300px] bg-gray-300 rounded-lg mt-4">
        <Text className="text-center py-3">
          Chưa có tài khoản? Đăng ký ngay
        </Text>
      </TouchableOpacity>
    </View>
  );
}
