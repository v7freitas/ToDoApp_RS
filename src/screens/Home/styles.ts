import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    height: 64,
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#262626",
  },
  firstTaskContainer: {
    backgroundColor: "#1A1A1A",
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
    paddingBottom: 24,
  },
  inputForm: {
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
});
