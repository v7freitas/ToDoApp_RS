import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerChecked: {
    borderWidth: 1,
    borderColor: "#262626",
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: "#f2f2f2",
    fontFamily: "Inter_400Regular",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
  },
  taskMarked: {
    textDecorationLine: "line-through",
  },
});
