import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config.js';
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, updateDoc, setDoc, doc} from "firebase/firestore";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import buildProfileStyles from '../styles/buildProfileStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import {getStorage, ref, uploadBytes, putFile, uploadBytesResumable} from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import {ContinueButton, StartButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';

const SetProfilePic = ({navigation, route}) => {
    const [image, setImage] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [filename, setFilename] = useState(null);
    const userEmail = route.params["email"];
    console.log(userEmail);
    const chooseImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
      });
      setImage(result.assets[0].uri);
      setImageData(result.assets)
    };
  
    const uploadImage = async () => {
      // console.log("Image data is:", imageData[0].uri)
      try { 
        const uri = imageData[0].uri
        const cutUri = uri.substring(uri.lastIndexOf('/') + 1);
        setFilename(cutUri);
        const storage = getStorage(app);
        const picRef = ref(storage, cutUri);
        const metadata = {
          contentType: 'image/jpeg',
        };
        const response = await fetch(uri);
        const bytes = await response.blob();
        // await uploadBytes(picRef, bytes);
        await uploadBytesResumable(picRef, bytes);
      }catch(error) {
        console.log(error)
      }
      
        
        
    }
      
      
    

    const setPicture = (imageData) =>{
      const db = getFirestore(app);
      const docRef = doc(db, "users", userEmail);
      console.log(imageData)
      updateDoc(docRef, {profilePicRef: filename});
      setImage(null);
      setImageData(null);     
      // navigation.navigate("Enter Courses", {email:userEmail})    
      navigation.navigate("Enter Major", {email:userEmail})         
    }

    return (
      // <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <View style={buildProfileStyles.container}>
        <Text style={buildProfileStyles.instruction}> Select a Profile Picture </Text>
        <StartButton 
              text='Choose a picture' 
              top={70} 
              color={'#FFFFFF'}
              pressFunction = {chooseImage}> 
        </StartButton>
        <Image source={{ uri: image }} style={{ width: 200, height: 200, marginVertical: 10}}></Image>
        <StartButton 
              text='Upload your picture' 
              top={20} 
              color={'#FFFFFF'}
              pressFunction = {() => uploadImage(imageData)}> 
        </StartButton>
        <ContinueButton marginTop={50} pressFunction={() => setPicture(imageData)}></ContinueButton>
      </View>
    ); 
};

export default SetProfilePic;
