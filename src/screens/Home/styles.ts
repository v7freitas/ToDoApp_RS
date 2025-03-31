import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1 / 4,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },
  input: {
    flexDirection: "row",
    position: "absolute",
    left: 24,
    right: 24,
    top: -27,
  },
  notifications: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 59,
    marginBottom: 20,
  },
  emptyList: {
    flex: 1,
    borderTopColor: "#333333",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
  emptyMessage: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
  },
});
