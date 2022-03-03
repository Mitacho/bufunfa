import { StyleSheet } from "react-native";
import themeConstants from "@styles/theme/constants";

export const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontSize: themeConstants.fontSize.m,
  },
  button: {
    width: "100%",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  dashedButton: {
    borderWidth: 2,
    borderStyle: "dashed",
  },
  transparentButton: {
    backgroundColor: "none",
    borderWidth: 0,
  },
});
