import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "@/utils/redux/hooks";
type Props = {};

const Home = (props: Props) => {
  const { userProfile } = useAppSelector((state) => state.user);

  return (
    <View>
      <Text>{userProfile}</Text>
    </View>
  );
};

export default Home;
