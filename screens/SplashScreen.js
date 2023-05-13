import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const nav = useNavigation();
    useLayoutEffect(() => {
      nav.setOptions({
        headerShown: false,
      });
    });
  return (
    <>
    <View className='flex-1 bg-orange-700'>
        <TouchableOpacity
        onPress={() => {
            nav.navigate("Login")
        }}>
            <View className= 'mt-72 ml-20'>
                <Image source={require("./assets/kejalogo1.png")}/>
            </View>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default SplashScreen