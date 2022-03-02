import { StyleSheet } from "react-native";
import themeConstants from "@styles/theme/constants";

export const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    textAlign: "center",
    color: "#171717",
    fontSize: themeConstants.fontSize.m,
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
