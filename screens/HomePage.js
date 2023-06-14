import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/compat/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/compat/firestore";

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import {StartButton, BackButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';

const HomePage = () => {
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
      </LinearGradient> 
    ); 
};

export default HomePage;
