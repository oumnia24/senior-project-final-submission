import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import buildProfileStyles from '../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton, EditButton} from '../components/buttons';
import profileStyles from '../styles/profileStyles';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import {getStorage, ref, uploadBytes,getDownloadURL, getMetadata} from 'firebase/storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-screens';
import { SelectList } from 'react-native-dropdown-select-list';
import { getFirestore, collection, addDoc, getDocs, doc, query, orderBy, where} from "firebase/firestore";
import chatStyles from '../styles/chatStyles';
import BuddiesPageGeneral from '../screens/buddies/BuddiesPageGeneral';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BuddyProfile from '../screens/buddies/BuddyProfile';
import BuddyRequests from '../screens/buddies/BuddyRequests';

const Stack = createNativeStackNavigator();

export default function Chat() {
  return (
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName = {BuddiesPageGeneral}
        >
        <Stack.Screen
            name="Buddies Page"
            component={BuddiesPageGeneral}
        />
        <Stack.Screen
            name="Buddy Profile"
            component={BuddyProfile}
        />
        <Stack.Screen
            name="Buddy Requests"
            component={BuddyRequests}
        />
        
      </Stack.Navigator>
    
  );
}

