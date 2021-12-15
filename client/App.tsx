import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import SignInPage from "./components/modules/SignInPage/SignInPage";
import SignUpPage from "./components/modules/SignUpPage/SignUpPage";
import { NativeRouter, Routes, Route } from "react-router-native";
import { styles } from "./styles/index";

export default function App() {
  return (
    <NativeRouter>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.imageBackground}
      >
        <View>
          <Routes>
            <Route path="" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Routes>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </NativeRouter>
  );
}
