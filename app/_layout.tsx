import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "ホーム" }} />
    <Stack.Screen name="about" options={{ title: "〜とは" }} />
  </Stack>;
}
