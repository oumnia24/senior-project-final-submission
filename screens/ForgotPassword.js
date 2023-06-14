import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, collection, addDoc} from "firebase/firestore";

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import {StartButton, BackButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';

const SetPassword = ({route, navigation}) => {
    const auth = getAuth(app);
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const sendVerificationEmail= (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setErrorMessage('Reset email sent!')
        })
    }
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <BackButton onPress={() => navigation.navigate('Welcome Page')}></BackButton>
        <Text style={registrationStyles.registrationQuestion}> Enter your email address.</Text>
        <Text style={[registrationStyles.instructions, {marginHorizontal:20}]}> SocialStudy will send you an email with a password reset link.</Text>
        <EmailInfo onChangeText={(value) => setEmail(value)} placeholder={'email'}> </EmailInfo> 
        <StartButton 
          top={50} 
          color={'#FFFFFF'}
          text='Send Email'
          pressFunction={() => sendVerificationEmail(email)} 
        />
        <Text style={[registrationStyles.instructions, {marginTop: 100, marginHorizontal: 20}]}>{errorMessage}</Text>
      </LinearGradient> 
    ); 
};

export default SetPassword;
