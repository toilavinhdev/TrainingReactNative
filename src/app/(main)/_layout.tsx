import { Redirect, Tabs, useRouter } from "expo-router";
import React, { useState } from "react";

export const unstable_settings = {
  initialRouteName: "schedule",
};

export default function MainLayout() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Lịch chiếu phim" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="notification"
        options={{ title: "Thông báo" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="voucher"
        options={{ title: "Khuyến mại" }}
      ></Tabs.Screen>
      <Tabs.Screen name="setting" options={{ title: "Cài đặt" }}></Tabs.Screen>
    </Tabs>
  );
}
