import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";
import { View } from "react-native";

import "react-native-gesture-handler";
import Providers from "@/services/providers";
// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [isReady, setReady] = useState<boolean>(false);

  // assets preloading
  const preloadAssets = async () => {
    try {
      // await Promise.all([loadImages(), loadFonts()]);
    } finally {
      setReady(true);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    preloadAssets();
  }, []);
  if (!isReady) return null;

  return (
    <View style={{ flex: 1 }}>
      <Providers />
    </View>
  );
}
