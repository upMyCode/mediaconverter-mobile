import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 65,
  },
  main: {
    width: 305,
  },
  footer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 75,
  },
  form: {
    marginTop: 35,
    alignItems: "center",
  },
  textHeader: {
    color: "#FFFFFF",
    fontSize: 64,
    lineHeight: 69.12,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 15.12,
    textAlign: "center",
  },

  textGroup: {
    width: 305,
    display: "flex",
    justifyContent: "center",
  },
  textInput: {
    width: 297.5,
    height: 55,
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 15.12,
    color: "#878787",
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
    borderRadius: 20,
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 16.1,
  },
  footerTextHeader: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    lineHeight: 16.1,
  },
  input: {},
  inputImage: {
    position: "absolute",
    zIndex: 2,
    top: "16%",
    left: "3%",
  },
});
