import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
    color: "#F2F2F2",
  },
  variantCreated: {
    color: "#4EA8DE",
  },
  variantCompleted: {
    color: "#5E60CE",
  },
  count: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
});
