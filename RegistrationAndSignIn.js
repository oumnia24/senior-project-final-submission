import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { useFonts, NerkoOne_400Regular } from '@expo-google-fonts/nerko-one';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from './config';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomePage from './screens/WelcomePage.js';
import Registration1 from './screens/Registration1.js';
import SetPassword from './screens/SetPassword';
import Verification from './screens/Verification';
import LoginPage from './screens/LoginPage';
import ForgotPassword from './screens/ForgotPassword';
import BuildProfile1 from './screens/BuildProfile1';
import HomePage from './screens/HomePage';
import SetProfilePic from './screens/SetProfilePic';
import EnterCourses from './screens/EnterCourses';
import EnterMajor from './screens/EnterMajor';
import SignedIn from './Profile';
import ProfilePage from './screens/ProfilePage';
import ProfilePageEdit from './screens/ProfilePageEdit';
import {Poppins_400Regular, Poppins_700Bold, Poppins_500Medium} from '@expo-google-fonts/poppins';

// Initialize Firebase
// const auth = getAuth(app);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const CELL_COUNT = 6;


export default function RegistrationAndSignIn() {
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome Page"
          component={WelcomePage}
        />
        <Stack.Screen
          name="Enter Name and Email"
          component={Registration1}
        />
         <Stack.Screen
          name="Set Password"
          component={SetPassword}
        />
        <Stack.Screen
          name="Login Page"
          component={LoginPage}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="Build Profile 1"
          component={BuildProfile1}
        />
        <Stack.Screen
          name="Set Profile Pic"
          component={SetProfilePic}
        />
        <Stack.Screen
          name="Home Page"
          component={HomePage}
        />
        <Stack.Screen
          name="Enter Major"
          component={EnterMajor}
        />
        <Stack.Screen
          name="Enter Courses"
          component={EnterCourses}
        />
        <Stack.Screen
          name="Enter Verification Code"
          component={Verification}
        />
        <Stack.Screen
          name="Add Profile Picture"
          component={SetProfilePic}
        />
         
      </Stack.Navigator>
    
  );
}