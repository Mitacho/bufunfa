import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type Screens = "Home" | "Profile" | "NewTransaction";
export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  NewTransaction: undefined;
};

export type ScreenProps<T extends Screens> = NativeStackScreenProps<
  StackParamList,
  T
>;
export type NavigationScreenProps<T extends Screens> =
  NativeStackNavigationProp<StackParamList, T>;
