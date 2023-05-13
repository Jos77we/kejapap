import { View, Text, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileSettings = () => {
  const nav = useNavigation();
  const [text, onChangeText] = React.useState('John Doe');
  const [number, onChangeNumber] = React.useState('0712447665');
  const [email, onChangeEmail] = React.useState('matasiya254@gmqil.com');
  const [place, onChangePlace] = React.useState('Langata, spring field');
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  });
  return (
    <ScrollView>
      {/* Header */}
    <View className="flex-1">
      <View className="flex-row mt-4 ml-4">
        <View className="flex-1 mt-6">
          <Image source={require("./assets/pap.png")} />
        </View>
        <View className="mt-6 mr-6">
        
          <MaterialIcon name="admin-panel-settings" size={34} color="orange" />
        </View>
        
      </View>
      {/* Profile settings section 1 */}
      <Text className='text-2xl ml-4 font-semibold mt-3'>Porfile settings</Text>
      <View className='h-1 w-40 bg-black ml-4 rounded-md'></View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Name</Text>
      <TextInput
      style={style.input}
        onChangeText={onChangeText}
        value={text}
      />
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
      <View className='flex-row'>
        <Text className='font-semibold flex-1'>Phone Number</Text>
        <Material name="playlist-edit" size={22} />
        </View>
      <TextInput
      style={style.input}
        onChangeText={onChangeNumber}
        value={number}
      />
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
      <View className='flex-row'>
        <Text className='font-semibold flex-1'>Email</Text>
        <Material name="playlist-edit" size={22} />
        </View>
      <TextInput
      style={style.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <View className='flex-row'>
        <Text className='font-semibold flex-1'>Current Residency</Text>
        <Material name="playlist-edit" size={22} />
        </View>
      <TextInput
      style={style.input}
        onChangeText={onChangePlace}
        value={place}
      />
      </View>
      {/* Residency second part */}
      <Text className='text-2xl ml-4 font-semibold mt-12'>Residency</Text>
      <View className='h-1 w-28 bg-black ml-4 rounded-md'></View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Property ID</Text>
      <Text
      style={style.input}
       >2022-103367</Text>
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Payment Info</Text>
      <Text
      style={style.input}
       >Account No. 247247</Text>
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Bussiness Id</Text>
      <Text
      style={style.input}
       >0706427946</Text>
      </View>

      <Text className='text-2xl ml-4 font-semibold mt-12'>Residency</Text>
      <View className='h-1 w-28 bg-black ml-4 rounded-md'></View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Property ID</Text>
      <Text
      style={style.input}
       >2022-103367</Text>
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Payment Info</Text>
      <Text
      style={style.input}
       >Account No. 247247</Text>
      </View>
      <View className= 'h-12 w-80 border-b-2 ml-4 mt-6'>
        <Text className='font-semibold'>Bussiness Id</Text>
      <Text
      style={style.input}
       >0706427946</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  input: {
     bottom: 0,
     fontSize: 18

       
  }
})

export default ProfileSettings;
