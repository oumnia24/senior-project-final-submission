import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { useFonts, NerkoOne_400Regular } from '@expo-google-fonts/nerko-one';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { LinearGradient } from 'expo-linear-gradient';
import {app} from './config';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from './screens/ProfilePage';
import ProfilePageEdit from './screens/ProfilePageEdit';
import {Poppins_400Regular, Poppins_700Bold, Poppins_500Medium} from '@expo-google-fonts/poppins';

// Initialize Firebase
// const auth = getAuth(app);
const Stack = createNativeStackNavigator();

// const CELL_COUNT = 6;
const Tab = createBottomTabNavigator();


export default function ProfileAndEdit() {
  let [fontsLoaded] = useFonts({
    NerkoOne_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName = {ProfilePage}
        >
        <Stack.Screen
            name="Profile Page"
            component={ProfilePage}
          />
        <Stack.Screen
          name="Profile Page Edit"
          component={ProfilePageEdit}
        />
        
      </Stack.Navigator>
    
  );
}