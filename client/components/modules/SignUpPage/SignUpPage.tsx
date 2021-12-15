import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import Navbar from "../../Navbar/Navbar";
import AppLoading from "expo-app-loading";
import MainButton from "../../MainButton/MainButton";
import { useLinkPressHandler } from "react-router-native";
import { styles } from "./styles";

const SignUpPage = () => {
  const [loaded, setLoaded] = useState<Boolean>(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Montserrat-SemiBold": require("../../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
      "Montserrat-Bold": require("../../../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
      "Montserrat-ExtraBold": require("../../../assets/fonts/Montserrat/Montserrat-ExtraBold.ttf"),
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
            <Text style={styles.textHeader}>Welcome!</Text>
            <Text style={styles.text}>To registration menu</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.input}>
              <Image
                source={require("../../../assets/user.png")}
                style={styles.inputImage}
              />
              <TextInput
                style={styles.textInput}
                placeholder="randomemail@gmail.com"
                textAlign={"center"}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={require("../../../assets/lock.png")}
                style={styles.inputImage}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="password"
                textAlign={"center"}
              />
              <View style={styles.input}>
                <Image
                  source={require("../../../assets/confirmpassword.png")}
                  style={styles.inputImage}
                />
                <TextInput
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="confim password"
                  textAlign={"center"}
                />
              </View>
            </View>
          </View>
          <MainButton context="Sign Up" title="" />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerTextHeader}> Go to Sign In !</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpPage;
