import { StyleSheet } from "react-native";
import themeConstants from "@styles/theme/constants";

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins",
  },
  input: {
    width: "100%",
    borderRadius: 4,
    fontSize: themeConstants.fontSize.m,
  },
});

export default styles;
