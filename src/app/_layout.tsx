import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { TodoProvider } from "@/context/TodoContext";
import { ensureToken } from "@/api/authClient";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        if (fontsLoaded) {
          await ensureToken();
          setIsInitialized(true);
        }
      } catch (e) {
        console.log(e)
      } finally {
        SplashScreen.hideAsync();
      }
    };

    initialize();
  }, [fontsLoaded]);

  if (!fontsLoaded || !isInitialized) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <StatusBar barStyle="light-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <TodoProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen
              name="todo-list-detail"
              options={{ headerBackTitleVisible: false }}
            />
          </Stack>
        </TodoProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
