import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import store from "@/utils/redux/store";
import { Provider } from "react-redux";
import Home from "@/screens/Home/Home";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
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
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
