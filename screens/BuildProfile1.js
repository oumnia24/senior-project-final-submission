import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/compat/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/compat/firestore";

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import buildProfileStyles from '../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';

const BuildProfile1 = ({route, navigation}) => {
  
  const userEmail = route.params.email;
  console.log(userEmail)
  return (
      <View style={buildProfileStyles.container} >
        <Text style={buildProfileStyles.welcomeMessage}> Welcome to SocialStudy!</Text>
        <ContinueButton pressFunction={() => navigation.navigate('Set Profile Pic', {email: userEmail})}></ContinueButton>
      </View> 
    ); 
};

export default BuildProfile1;
