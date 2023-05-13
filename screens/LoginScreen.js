import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
    const nav = useNavigation();
    useLayoutEffect(() => {
      nav.setOptions({
        headerShown: false,
      });
    });
  return (
    <>
     <View className="mt-12 ml-1">
          <Image source={require("./assets/pap.png")} />
        </View>
        <View className='mt-12'>
        <Text className='text-2xl font-bold ml-3'>Welcome Back!</Text>
        <Text className='text-4xl font-extrabold ml-3 mt-4'>Login Here</Text>
        </View>
    <View className='mt-20 ml-8'>
    <Text className='font-semibold ml-1'>Username/Email</Text>
    <View className='h-14 w-72 bg-white rounded-3xl border-solid border-slate-900 mt-2 border-4'>
      <TextInput style={style.input}/>
    </View>
    </View>
    <View className='mt-10 ml-8'>
      <Text className='font-semibold ml-1'>Password</Text>
    <View className='h-14 w-72 bg-white rounded-3xl border-solid border-slate-900 mt-2 border-4'>
    <TextInput style={style.input}/>
    </View>
    </View>
    <View className='mt-6'>
        <Text className='ml-8 font-semibold'>Forgot password</Text>
        <TouchableOpacity
        onPress={() => {
            nav.navigate("Home")
        }}>
    <View className='h-10 w-44 bg-orange-600 mx-24 rounded-3xl mt-14 flex justify-center'>
        <Text className='text-center font-semibold text-white'>Submit</Text>
    </View>
    </TouchableOpacity>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  input: {
     top: 6,
     fontSize: 18,
     marginLeft: 8

       
  }
})

export default LoginScreen