import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flex: 1 / 4,
    width: "100%",
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },
  addTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    left: 24,
    right: 24,
    top: -27,
  },
});
