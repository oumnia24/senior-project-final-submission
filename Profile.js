import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { useFonts, NerkoOne_400Regular } from '@expo-google-fonts/nerko-one';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from './config';
import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from './screens/ProfilePage';
import ProfilePageEdit from './screens/ProfilePageEdit';
import {Poppins_400Regular, Poppins_700Bold, Poppins_500Medium} from '@expo-google-fonts/poppins';
import ProfileAndEdit from './ProfileAndEdit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './tabs/Home';
import Chat from './tabs/Chat';
import Buddies from './tabs/Buddies';
import Status from './tabs/Status';
// Initialize Firebase
// const auth = getAuth(app);
const Stack = createNativeStackNavigator();
// const CELL_COUNT = 6;
const Tab = createBottomTabNavigator();


export default function SignedIn() {
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
      <Tab.Navigator 
        // initialRouteName = {ProfilePage}
        screenOptions={{
          headerShown: false
        }}
          
        >
        
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
          />
          <Tab.Screen
          name="Status"
          component={Status}
          options={{
            tabBarLabel: 'Study',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-education" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen
          name="Buddies"
          component={Buddies}
          options={{
            tabBarLabel: 'Buddies',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ),
          }}
          />
          
          
          <Tab.Screen
            name="Profile And Edit"
            component={ProfileAndEdit}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />


      </Tab.Navigator>
    
  );
}