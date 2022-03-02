import { StyleSheet } from "react-native";
import themeConstants from "@styles/theme/constants";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: themeConstants.spacing.xs,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    marginRight: themeConstants.spacing.s,
  },
  amount: {
    flex: 1,
  },
  circle: {
    position: "absolute",
    left: -6,
  },
});

export default styles;
