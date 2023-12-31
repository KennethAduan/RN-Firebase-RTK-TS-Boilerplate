import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

export function useAppNavigation() {
  return useNavigation<NavigationProp<ParamListBase>>();
}
