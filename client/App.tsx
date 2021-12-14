import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import MainComponent from "./components/modules/MainPage/MainComponent";
import { styles } from "./styles/index";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.imageBackground}
    >
      <View>
        <MainComponent />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
