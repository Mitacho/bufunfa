import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
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
