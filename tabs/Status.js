import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/firestore";

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import buildProfileStyles from '../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton, EditButton} from '../components/buttons';
import profileStyles from '../styles/profileStyles';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import {getStorage, ref, uploadBytes,getDownloadURL, getMetadata} from 'firebase/storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Status = ({route, navigation}) => {

  return (
    <View style={profileStyles.container}>
      
    </View>
    ); 
};

export default Status;
