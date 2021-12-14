import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const MainButton = ({ context, title }: any) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{context}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Sign In")}
      >
        <View style={styles.imageButton}>
          <Image
            source={require("../../assets/buttonlogo.png")}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
