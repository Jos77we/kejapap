import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";


const Footer = () => {
    const nav = useNavigation();
  return (
   <>
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
              <TouchableOpacity 
            onPress={() => {
              nav.navigate("Home")
            }}>
                <AntDesign name="home" size={28} color="white" />
                </TouchableOpacity>
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
   </>
  )
}

export default Footer