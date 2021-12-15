import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.navbarStyleGroup}>
        <Text style={styles.navbarStyleGroupText}>MEDIA</Text>
        <Text style={styles.navbarStyleGroupText}>CONVERTER</Text>
      </View>
      <View>
        <Image source={require("../../assets/burger-menu.png")} />
      </View>
    </View>
  );
};

export default Navbar;
