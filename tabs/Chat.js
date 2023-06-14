import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/firestore";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatPage from '../screens/chat/ChatPage';
import ChatWithOumniaPage from '../screens/chat/ChatWithOumniaPage';

const Stack = createNativeStackNavigator();

export default function Chat() {
  return (
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName = {ChatPage}
        >
        <Stack.Screen
            name="Chat Page"
            component={ChatPage}
        />
        <Stack.Screen
            name="Chat With Oumnia Page"
            component={ChatWithOumniaPage}
        />
        
      </Stack.Navigator>
    
  );
}

