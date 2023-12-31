import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import StackNavigator from "./stack";
const MainNav = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);

  useEffect(() => {
    // Check if it's the first launch
    AsyncStorage.getItem("FirstLaunced").then((value: string | null) => {
      if (value === null) {
        // First launch
        AsyncStorage.setItem("FirstLaunced", "true");
        setIsFirstLaunch(true);
        console.log("First launch.");
      } else {
        // Not the first launch
        setIsFirstLaunch(false);
        console.log("Not the first launch.");
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // Loading state or splash screen
  }
  return (
    <>
      <StackNavigator isFirstLaunch={isFirstLaunch} />
    </>
  );
};

export default MainNav;
