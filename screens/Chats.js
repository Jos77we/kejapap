import { View, ImageBackground, StyleSheet, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Footer from "./component/Footer";

const Chats = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("./assets/chatwallpaper2-removebg-preview.png")}
        resizeMode="cover"
        style={style.image}
      >
        <View className="h-28  bg-orange-600  ">
          <Text className="text-3xl mt-14 ml-4 text-white font-semibold ">
            Chat
          </Text>
        </View>
        <View className="w-11/12 bg-slate-400 rounded-md h-3/4 mx-4 mt-2 opacity-80">
          <View className="flex-row">
            <View className="h-16 w-16 rounded-full bg-white m-2"></View>
            <View className="mt-6 ml-2">
              <View>
                <Text className="text-xl">Goshen Homes</Text>
                <Text>Langata</Text>
              </View>
            </View>
          </View>
          <View className='h-20 w-56 bg-gray-600 ml-2 mt-10 rounded-md'>
            <Text className='ml-4 text-white font-semibold'>Gladys</Text>
            <Text className='m-2 text-white'>House number 10 the tap is not working please call the plumber</Text>
          </View>
          <View className='h-20 w-56 bg-gray-600  ml-28 mt-8 rounded-md'>
          <Text className='ml-4 text-white font-semibold'>Munene landlord</Text>
          <Text className='m-2 text-white'>Well noted.The plumber is on his way</Text>
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // marginLeft: 16,
  },
});

export default Chats;
