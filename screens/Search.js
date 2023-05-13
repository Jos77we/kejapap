import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Font from "react-native-vector-icons/FontAwesome";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import Ions from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Search = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <View className="flex-1">
      <View className="h-40 bg-orange-500 ">
        <View className="mt-8 ml-3">
          <Image source={require("./assets/kejapapwhite.png")} />
        </View>
        <View className="h-10 w-60 rounded-3xl bg-white mt-2 ml-5">
          <View className='ml-3 mt-4'>
          <Feather name="search" size={24}/>
          </View>
        </View>
      </View>
      <View className="h-56 bg-slate-500"></View>
      <View className="mt-4 ml-2">
        <Text className="text-2xl font-semibold ">Kitusuru Golden Plain</Text>
        <Text className="font-semibold text-lg">Description</Text>
        <Text className="font-medium w-11/12 mt-2 ml-4 text-base">
          Live the dream in this amazing house located just 10km form the heart
          of the city for an affordable price at the comfort of your pocket
        </Text>
        <Text className="font-semibold text-lg mt-2">Ammenities</Text>
        <View className="flex-row m-3">
          <Font name="bathtub" size={24} />
          <Text className="ml-1">4 Bathrooms</Text>
          <View className="ml-4 flex-row">
            <Material name="bed-outline" size={24} />
            <Text className="ml-1">6 Bedrooms</Text>
          </View>
          <View className="ml-4 flex-row">
            <Ions name="location-outline" size={24} />
            <Text className="ml-1">Kitusuru</Text>
          </View>
        </View>
        <Text className="font-semibold text-lg mt-2">Price</Text>
        <View className='flex-row'>
        <Text className="font-semibold text-xl mt-2 ml-3 flex-1">KSH.7,000,000</Text>
        <View className='mr-6'>
        <Ions name="chatbubble-ellipses-outline" size={30}/>
        </View>
        </View>
      </View>
      <View className="h-16 bg-orange-500 my-8">
        <View className="h-14 bg-white mt-1 w-11/12 ml-4 rounded-2xl flex-row">
          <View className="ml-8 mt-2.5">
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Search");
              }}
            >
              <Feather name="search" size={28} color="orange" />
            </TouchableOpacity>
          </View>
          <View className="ml-8 mt-2.5">
            <TouchableOpacity
              onPress={() => {
                nav.navigate("ProfileSettings");
              }}
            >
              <MaterialIcon
                name="admin-panel-settings"
                size={28}
                color="orange"
              />
            </TouchableOpacity>
          </View>
          <View className="ml-8">
            <View className="h-14 w-11 bg-orange-500 rounded-xl justify-center">
              <View className="ml-2">
                <TouchableOpacity
                  onPress={() => {
                    nav.navigate("Home");
                  }}
                >
                  <AntDesign name="home" size={28} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="ml-8 mt-2.5">
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Chats");
              }}
            >
              <AntDesign name="message1" size={28} color="orange" />
            </TouchableOpacity>
          </View>
          <View className="ml-8 mt-2.5">
            <Ions name="ios-location-outline" size={28} color="orange" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;
