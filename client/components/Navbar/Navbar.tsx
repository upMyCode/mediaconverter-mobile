import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View>
        <Image source={require("../../assets/mediaconverter.png")} />
      </View>
      <View>
        <Image source={require("../../assets/burger-menu.png")} />
      </View>
    </View>
  );
};

export default Navbar;
