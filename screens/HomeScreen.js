import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const HomeScreen = () => {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <View className=" bg-orange-600 flex-1">
        {/* Header section */}
        <View className="flex-row pt-14">
          <View className="h-16 w-16 rounded-full bg-white ml-4"></View>
          <View className="flex-col ml-2 mt-2">
            <Text className="text-2xl font-semibold text-white">
              Hello Gabriel
            </Text>
            <Text className="font-medium text-lg"> Welcome Back!</Text>
          </View>
        </View>

        {/* Category 1 section */}
        {/* category 1 wallet section */}
        <View className="flex-col pt-10 ">
          <View className="flex-row">
            <View className="h-72 w-44 bg-white ml-2 rounded-2xl ">
              <View className="flex-row mt-5">
                <Text className="ml-4 text-2xl font-extrabold text-green-700 flex-1">
                  Wallet
                </Text>
                <View className="mr-4">
                  <Ionicons name="wallet-outline" size={28} color="green" />
                </View>
              </View>
              <View className="h-1 w-16 bg-green-700 ml-4 rounded-2xl"></View>
              <Text className="ml-4 mt-2 text-lg font-semibold">Balance</Text>
              <Text className="text-green-700 ml-4 mt-1 text-xl font-extrabold">
                KSH.1000
              </Text>
              <Text className="ml-4 mt-4 text-lg font-semibold">Used</Text>
              <Text className="text-green-700 ml-4 mt-1 text-xl font-extrabold">
                KSH.1000
              </Text>
              <View className="h-14 w-14 rounded-full bg-orange-600 mt-4 left-28">
                <View className="ml-2.5 mt-2.5">
                  <Feather name="plus" size={34} color="white" />
                </View>
              </View>
            </View>
            {/* category 2 billing section */}
            <View className="h-80 w-44 bg-white ml-4 rounded-2xl">
              <View className="flex-row mt-5">
                <Text className="ml-4 text-2xl font-extrabold text-green-700 flex-1">
                  Bills
                </Text>
                <View className="mr-4">
                  <Octicons name="checklist" size={28} color="green" />
                </View>
              </View>
              <View className="h-1 w-10 bg-green-700 ml-4 rounded-2xl"></View>
              <Text className="ml-4 mt-1 text-base font-semibold">Rent</Text>
              <Text className="text-green-700 ml-4 mt-1 text-lg font-extrabold">
                KSH.7000
              </Text>
              <Text className="ml-4 mt-1 text-base font-semibold">
                Electricity
              </Text>
              <Text className="text-green-700 ml-4 mt-1 text-lg font-extrabold">
                KSH.400
              </Text>
              <Text className="ml-4 mt-1 text-base font-semibold">Water</Text>
              <Text className="text-green-700 ml-4 mt-1 text-lg font-extrabold">
                KSH.200
              </Text>
              <View className="flex-row">
                <View className="flex-1">
                  <Text className="ml-4 mt-1 text-base font-semibold">
                    Others
                  </Text>
                  <Text className="text-green-700 ml-4 mt-1 text-lg font-extrabold">
                    KSH.1500
                  </Text>
                </View>
                <View className="h-14 w-14 rounded-full bg-orange-600 mr-1"></View>
              </View>
            </View>
          </View>

          {/* Category 2 section */}
          <View className="pt-4 flex-row">
            {/* Category 2 section 1 */}
            <View className="h-56 w-44 bg-white ml-2 rounded-2xl">
              <View className="flex-row mt-5">
                <Text className="ml-4 text-2xl font-extrabold text-green-700 flex-1">
                  Receipt
                </Text>
                <View className="mr-4">
                  <Ionicons name="receipt-outline" size={28} color="green" />
                </View>
              </View>
              <View className="h-1 w-20 bg-green-700 ml-4 rounded-2xl"></View>
              <View className="flex-row mt-4 ml-4">
                <Ionicons name="receipt" color="orange" size={20} />
                <Text className="text-lg font-semibold ml-2">Monthly</Text>
              </View>
              <View className="flex-row mt-4 ml-4">
                <Ionicons name="receipt" color="orange" size={20} />
                <Text className="text-lg font-semibold ml-2">Mpesa</Text>
              </View>
              <View className="flex-row mt-4 ml-4">
                <Ionicons name="receipt" color="orange" size={20} />
                <Text className="text-lg font-semibold ml-2">Residential</Text>
              </View>
            </View>
            {/* Category 2 section 2 */}
            <View className=" h-52 w-44 bg-white ml-4 rounded-2xl">
              <View className="flex-row mt-5">
                <Text className="ml-4 text-2xl font-extrabold text-green-700 flex-1">
                  Inbox
                </Text>
                <View className="mr-4">
                  <Material
                    name="message-badge-outline"
                    size={28}
                    color="green"
                  />
                </View>
              </View>
              <View className="h-1 w-12 bg-green-700 ml-4 rounded-2xl"></View>
              <View className="flex-row mt-3 ml-2">
                <View className="h-12 w-12 rounded-full bg-blue-800"></View>
                <Text className="w-32 ml-2">Meeting at 2.00pm.....</Text>
              </View>
              <View className="flex-row mt-3 ml-2">
                <View className="h-12 w-12 rounded-full bg-blue-800"></View>
                <Text className="w-32 ml-2">
                  Rent is due so lets manage to.....
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Dashtab */}
        <View className="h-16 bg-white mt-4 w-11/12 ml-4 rounded-2xl flex-row">
          <View className="ml-8 mt-2.5">
            <TouchableOpacity 
            onPress={() => {
              nav.navigate("Search")
            }}>
              <Feather name="search" size={28} color="orange" />
            </TouchableOpacity>
            
          </View>
          <View className="ml-8 mt-2.5">
            <TouchableOpacity
             onPress={() => {
              nav.navigate("ProfileSettings")
             }}>  
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
                <AntDesign name="home" size={28} color="white" />
              </View>
            </View>
          </View>
          <View className="ml-8 mt-2.5">
            <TouchableOpacity 
            onPress={() => {
              nav.navigate("Chats")
            }}>
              <AntDesign name="message1" size={28} color="orange" />
              </TouchableOpacity>
            
          </View>
          <View className="ml-8 mt-2.5">
            <TouchableOpacity
            onPress={() => {
              nav.navigate("Splash")
            }}>
            <Ionicons name="ios-location-outline" size={28} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
