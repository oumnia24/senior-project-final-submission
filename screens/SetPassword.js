import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config.js';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, setPersistence, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc} from "firebase/firestore";
// import {getFirestore} from "firebase/firestore";
;
// import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/compat/app";
// import 'firebase/compat/firestore';
// import { getFirestore } from 'firebase/compat/firestore';
import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import {StartButton, BackButton, PasswordInfo} from '../components/buttons';
import firebase from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyBBYH4_HMs9CZ1CfbzEgx04WXFzXMnfQvM",
//   authDomain: "socialstudy-56ca5.firebaseapp.com",
//   projectId: "socialstudy-56ca5",
//   storageBucket: "socialstudy-56ca5.appspot.com",
//   messagingSenderId: "720455986869",
//   appId: "1:720455986869:web:66304b61f1e1457e0798fc",
//   measurementId: "G-K9KL7GDZKT"
// };

// const app = initializeApp(firebaseConfig);

const SetPassword = ({route, navigation}) => {
    // console.log(app)
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [password, setPassword] = useState('')
    const [passwordVerification, setPasswordVerification] = useState('') 
    const {email, firstName, lastName} = route.params;
    const [errorMessage, setErrorMessage] = useState('');
    const docRef = doc(db, "users", "oumnia@stanford.edu");
    // console.log(docRef)
    const docSnap = getDoc(docRef);
    // console.log(docSnap)
    // if (docSnap.exists){
    //     // console.log(docSnap)
    // }
    const saveUserInfo = (firstName, lastName, email) => {
        try {    
            const data = {
                firstName: firstName,
                lastName: lastName,
                email:email,
                newUser: true,
                description: "Hi! I'm on Calie."
            }
            const usersCollection = collection(db, "users");
            setDoc(doc(usersCollection, email), data)
            .then(() => {
                const docRef = doc(db, "users", email);
                const docSnap = getDoc(docRef)
                .then((docSnap)=> {
                    console.log(docSnap)
                    if (docSnap.exists){
                        console.log(docSnap.data())
                    }
                    
                })
            })
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    const signUp = () => {
        if (password === passwordVerification){
            if (password.length > 8){
                auth.onAuthStateChanged(function(user){
                    if (user){
                        console.log("before create logged in")
                    }else{
                        console.log("before create not in")
                }})
                // setPersistence(firebase.auth.Auth.Persistence.NONE)
                
                createUserWithEmailAndPassword(auth,email, password)
                // auth.onAuthStateChanged(function(user){
                //     if (user){
                //         console.log("after create logged in")
                //     }else{
                //         console.log("after create not in")
                // }})
                
                .then((userCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(auth.currentUser, {handleInApp: true, url: 'http://socialstudy-56ca5.firebaseapp.com'}).then(() => {
                        alert('Verification email sent!')
                    }).catch((err) => {
                        alert(err.message)
                    }).then(() => {
                        saveUserInfo(firstName, lastName, email);
                        // navigation.navigate('Enter Verification Code')
                    })
                }).catch((err) => {
                    // console.log(err.code);
                    console.log(err.message);
                    {err.message === 'Firebase: Error (auth/email-already-in-use).' ? setErrorMessage('This email is already in use') : setErrorMessage('')}
                });
            }else{
                alert('Your password has to be at least 8 characters long')
            }
            
        } else{
            alert("Passwords don't match")
        }
        
    }
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <BackButton onPress={() => navigation.navigate('Enter Name and Email')}></BackButton>
        <Text style={registrationStyles.registrationQuestion}> Set a Password.</Text>
        <Text style={registrationStyles.instructions}> Password must be at least 8 characters.</Text>
        <PasswordInfo onChangeText={(value) => setPassword(value)} placeholder={'enter your password'}> </PasswordInfo> 
        <PasswordInfo onChangeText={(value) => setPasswordVerification(value)} placeholder={'retype password'}> </PasswordInfo>
        <StartButton 
          top={50} 
          color={'#FFFFFF'}
          text='Save'
          pressFunction={signUp} 
        />
        <Text style={[registrationStyles.instructions, {marginTop:80}]}>{errorMessage}</Text>
      </LinearGradient> 
    ); 
};

export default SetPassword;
