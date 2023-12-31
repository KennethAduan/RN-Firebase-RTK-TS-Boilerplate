import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../state/redux/store";

import MainNav from "@/navigations";
const Providers = () => {
  console.log("Providers");
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default Providers;
