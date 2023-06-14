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


const ProfilePage = ({route, navigation}) => {
  
  const storage = getStorage();
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [profilePicID, setProfilePicID] = useState('')
  const [userMajor, setUserMajor] = useState('')
  const [userYear, setUserYear] = useState('')
  const [userCourses, setUserCourses] = useState([])
  const [profilePic, setProfilePic] = useState(null)
  const [descriptionSize, setDescriptionSize] = useState(50)
  const [courseLoaded, setCourseLoaded] = useState(false)
  const db = getFirestore(app);

  // const email = route.params["email"]
  const auth = getAuth()
  const email = auth.currentUser.email
  const docRef = doc(db, "users", email);
  //Load a bunch of info about the user:
  getDoc(docRef).then( (docSnap) => {
    const data = docSnap.data()
    setName(data["firstName"] + ' ' + data["lastName"])
    setProfilePicID(data["profilePicRef"])
    setDescription(data["description"])
    setUserMajor(data["major"])
    setUserYear(data["year"])
  })
  //Change the description box size based on how long the description is
  .then(() =>{
    if (description.length > 156){
      setDescriptionSize(110)
    }else if (description.length > 117){
      setDescriptionSize(90)
    }
    else if (description.length > 90){
      setDescriptionSize(70)
    }else{
      setDescriptionSize(50)
    }
  })
  //Load the courses into our userCourses variable.
  useEffect(() => {
    const fetchCourses = async () => {
      if (courseLoaded) return;
      getDoc(docRef).then((docSnap) => {
        const data = docSnap.data();
        const courses = data["courses"]
        courses.map((item, index) => {
          userCourses.push(item)
        })
      })
      setCourseLoaded(true)
    };
    fetchCourses();
  }, []);
  //set profilePic to be the picture we have in storage for user
  useEffect(() => {
    const fetchProfilePic = async () => {
      const storage = getStorage();
      const listRef = ref(storage, 'gs://socialstudy-56ca5.appspot.com/' + profilePicID);
      const url = await getDownloadURL(listRef);
      setProfilePic(url);
    };

    if (profilePicID) {
      fetchProfilePic();
    }
  }, [profilePicID]);
  //Change the course department font size for long course dept names eg ATHLETIC
  //And separate letters from number 
  const showCourse = (course) => {
    let fontSize = 17; // Default font size
    if (course["name"].length > 3) {
      fontSize = 13;
    }
    const dept = course["name"].match(/[a-zA-Z]+/)[0];
    const num = course["name"].match(/\d+/)[0];
    return (
      <View style={profileStyles.courseBox} key={course["id"]}>
        <Text style={[profileStyles.courseDept, {fontSize}]} numberOfLines={1} ellipsizeMode="tail">{dept}</Text>
        <Text style={[profileStyles.courseDept, {fontSize}]}>{num}</Text>
      </View>
    )
  }

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.schoolNameAndEdit}>
        <Text style={profileStyles.schoolName}> Stanford</Text>
        {/* <Image source={require('../assets/pencil.png')} style={profileStyles.editButton}></Image> */}
        {/* <EditButton onPress={() => navigation.navigate('Profile Page Edit', {email:email, description:description})}></EditButton> */}
        <EditButton onPress={() => navigation.navigate('Profile Page Edit', {email:email, description:description})}></EditButton>
      </View> 
      <View style = {profileStyles.whiteBoxMainInfo}>
        <View>
          <Text style = {profileStyles.userName}>{name}</Text> 
          <View style = {profileStyles.majorAndClassInfo}>
            <Image source={require('../assets/certificate.png')} style = {profileStyles.majorAndClassSymbol}></Image>
            <Text style={profileStyles.userMajorAndClass}>{userMajor}</Text>
          </View> 
          <View style = {profileStyles.majorAndClassInfo}>
            <Image source={require('../assets/certificate.png')} style = {profileStyles.majorAndClassSymbol}></Image>
            <Text style={profileStyles.userMajorAndClass}>{userYear}</Text>
          </View>
        </View>
        <View style={profileStyles.profilePicStyle}>
        {<ImageBackground source={{uri:profilePic}} resizeMode="cover" style={profileStyles.image}>
        </ImageBackground>}
        </View>
      </View>
      <View style ={profileStyles.descriptionAndCourses}>
        <View style ={[profileStyles.descriptionBox, {height:descriptionSize}]} >
          <Text style={profileStyles.descriptionText}>{description}</Text>
        </View>
        <View>
          <Text style={profileStyles.currentCourses}>Current courses</Text>
        </View>
        <View style={profileStyles.courseList}> 
          {userCourses.map((course) => showCourse(course))}
        </View>
       </View>
    </View>
    ); 
};

export default ProfilePage;
