import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import * as Font from "expo-font";
import Navbar from "../Navbar/Navbar";
import { styles } from "./styles";

const MainComponent = () => {
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-SemiBold": require("../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
        "Montserrat-Bold": require("../../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
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

    loadFonts();
  }, []);
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
            <TextInput placeholder="randomemail@gmail.com" />
            <TextInput placeholder="email" />
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

export default MainComponent;
