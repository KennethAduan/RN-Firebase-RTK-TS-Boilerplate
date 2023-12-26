import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@/screens";
const Stack = createStackNavigator();
interface Props {
  isFirstLaunch: boolean;
}

const StackNavigator = (isFirstLaunch: Props) => {
  console.log("StackNavigator");
  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? "onBoardingScreen" : "Home"}
      // Hide the header for all screens in the navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
