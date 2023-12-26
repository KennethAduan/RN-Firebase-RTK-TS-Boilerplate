import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";

import store from "../state/redux/store";

import MainNav from "@/navigators";
const Providers = () => {
  console.log("Providers");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
};

export default Providers;
