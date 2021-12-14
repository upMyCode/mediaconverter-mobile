import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    width: 70,
    height: 46,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },
  buttonText: {
    fontSize: 22,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 23.76,
    color: "#FFFFFF",
    marginRight: 7,
  },
  imageButton: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
