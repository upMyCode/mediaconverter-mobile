import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import * as Font from "expo-font";
import Navbar from "../../Navbar/Navbar";
import AppLoading from "expo-app-loading";
import MainButton from "../../MainButton/MainButton";
import { styles } from "./styles";

const MainComponent = () => {
  const [loaded, setLoaded] = useState<Boolean>(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Montserrat-SemiBold": require("../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
      "Montserrat-Bold": require("../../../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    })
      .then((res) => {
        console.log("FONTS LOADED!");
        setLoaded(true);
      })
      .catch((Err) => {
        setLoaded(true);
        console.log(Err);
      });
  }

  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={(err) => console.log(err)}
        onFinish={() => setLoaded(true)}
      />
    );
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.textGroup}>
            <Text style={styles.textHeader}>hello!</Text>
            <Text style={styles.text}>Let's convert your file for free</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.textInput}
              placeholder="randomemail@gmail.com"
              textAlign={"center"}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="email"
              textAlign={"center"}
            />
          </View>
          <MainButton context="Sign In" title="" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Text style={styles.footerTextHeader}>Sign Up</Text>
        </View>
      </View>
    </View>
  );
};

export default MainComponent;
