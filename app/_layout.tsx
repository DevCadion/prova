import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false,
          statusBarColor: "#000"
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings",
          headerShown: false
        }}
      />
    </Stack>
  );
}
