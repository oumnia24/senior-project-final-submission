import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config.js';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/firestore";

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import {StartButton, BackButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';

const SetPassword = ({route, navigation}) => {
    const auth = getAuth(app);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const db = getFirestore(app);
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (!user.emailVerified){
                setErrorMessage("Email isn't verified. Please check your inbox ")
                console.log("Email not verified")
            }else{
                const usersCollection = collection(db, "users");
                const docRef = doc(db, "users", email);
                const docSnap = getDoc(docRef)
                .then((docSnap)=> {
                    if (docSnap.exists){
                        if (docSnap.data()["newUser"] === true){
                            // console.log("this is a new user")
                            navigation.navigate('Build Profile 1', {email: email})
                        }else{
                                       
                            navigation.navigate('Signed In', 
                                                {screen:'Profile And Edit',
                                                params:{
                                                    screen:'Profile Page',
                                                    params:{
                                                        email:email
                                                    }
                                                }})
                        }
                    }else{
                        console.log("no user found in database.")
                    }
                })

                
                
                // if (docSnap.exists) {
                //     console.log("Document data:", docSnap.data());
                // } else {
                // // docSnap.data() will be undefined in this case
                //     console.log("No such document!");
                // }

                // console.log(getDoc(userRef2).data())
                // const userInfo = getDoc(userRef);
                // if (userInfo.exists()){
                //     console.log('Document exists')
                // }
                // console.log(userInfo)
                // if (){
                //     // navigation.navigate('Build Profile 1')
                //     //            setDoc(doc(db, "users", email), data);

                // }else{
                //     // navigation.navigate('Home Page')
                // }
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            if (errorMessage === 'Firebase: Error (auth/user-not-found).'){
                setErrorMessage('Error: account not found.')
            }else if (errorMessage === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
                setErrorMessage('Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.')
            }else if (errorMessage === 'Firebase: Error (auth/invalid-email).'){
                setErrorMessage('Error: Invalid email or password.')
            }else if (errorMessage === 'Firebase: Error (auth/missing-password).'){
                setErrorMessage('Error: Please enter your password.')
            }else if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                setErrorMessage('Error: Invalid email or password.')
            }
        });
    }
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <BackButton onPress={() => navigation.navigate('Welcome Page')}></BackButton>
        <Text style={registrationStyles.registrationQuestion}> Welcome Back!</Text>
        <Text style={registrationStyles.instructions}> Let's log you in to continue studying.</Text>
        <EmailInfo onChangeText={(value) => setEmail(value)} placeholder={'email'}> </EmailInfo> 
        <PasswordInfo onChangeText={(value) => setPassword(value)} placeholder={'password'}> </PasswordInfo>
        <StartButton 
          top={50} 
          color={'#FFFFFF'}
          text='Log in'
          pressFunction={() => signIn(email, password)} 
        />
        <InstructionButton text={'Forgot password?'} onPress = {() => navigation.navigate('Forgot Password')}></InstructionButton>
        <Text style={[registrationStyles.instructions, {marginTop: 100, marginHorizontal: 20}]}>{errorMessage}</Text>
      </LinearGradient> 
    ); 
};

export default SetPassword;
