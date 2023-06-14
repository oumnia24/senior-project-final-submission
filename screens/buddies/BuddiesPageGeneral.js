import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import {app} from './../../config';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import styles from '../../styles/generalstyles';
import registrationStyles from '../../styles/registrationStyles';
import buildProfileStyles from '../../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton, EditButton, OtherUsername} from '../../components/buttons';
import profileStyles from '../../styles/profileStyles';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import {getStorage, ref, uploadBytes,getDownloadURL, getMetadata} from 'firebase/storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-screens';
import { SelectList } from 'react-native-dropdown-select-list';
import buddiesStyle from '../../styles/buddiesStyles';
import { getFirestore, collection, addDoc, getDocs, doc, query, orderBy, where} from "firebase/firestore";
import chatStyles from '../../styles/chatStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FriendRequestsButton } from '../../components/buttons';


const BuddiesPageGeneral = ({route, navigation}) => {
  const [searchedUser, setSearchedUser] = useState('');
  const [foundUsers, setFoundUsers] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const storage = getStorage();
  //update searchedUser value when the user types
  const updateSearchedUser = (text) => {
    setSearchedUser(text);
  }
  //get the buddy's profile picture from storage
  const fetchProfilePic = async (profilePicID) => {
    console.log("this is the id:", profilePicID)
    const storage = getStorage();
    const listRef = ref(storage, 'gs://socialstudy-56ca5.appspot.com/' + profilePicID);
    const url = await getDownloadURL(listRef);
    return url;
  };

  //log final value after user presses enter
  const findSearchedUser = () => {
    // setFoundUsers([])
    // console.log("foundUser before:", foundUsers)
    const firstAndLast = searchedUser.split(" ")
    const firstName = firstAndLast[0]
    const lastName = firstAndLast[1]
    //This part retrieves the user with the right first and last name from firestore
    //database
    const db = getFirestore();
    const userCollection = collection(db, 'users');
    const q = query(userCollection, where("firstName", "==", firstName), where("lastName", "==", lastName))
    const usersFound = []
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userInfo = doc.data();
        //this part gets the user's profile pic and pushes the info into usersFound 
        fetchProfilePic(userInfo["profilePicRef"]).then((url) => {
          userInfo["profilePic"] = url;
          usersFound.push(userInfo);
          if (usersFound.length === querySnapshot.size) {
            setFoundUsers(usersFound);
          }
        });
      });
    });
  }
  // console.log(foundUsers)
  return (
    <View style={buddiesStyle.container}>
      <View style={buddiesStyle.schoolNameAndEdit}>
        <Text style={buddiesStyle.schoolName}> Stanford</Text>
        <FriendRequestsButton onPress={() => navigation.navigate("Buddy Requests")}></FriendRequestsButton>
      </View>
      
      <View style={buddiesStyle.searchBarView}>
        <TextInput 
        style={buddiesStyle.searchBar} 
        value={searchedUser}
        onChangeText={updateSearchedUser}
        onSubmitEditing={findSearchedUser}></TextInput>
      </View>
      <View style={buddiesStyle.buddyTabs}>
        <Text style={buddiesStyle.buddyTabsText}>All</Text>
        <Text style={buddiesStyle.buddyTabsText}>Buddies</Text>
      </View>
      <View style={buddiesStyle.searchResults}>
        {foundUsers.map((user, index) => (
          <View key={index} style={buddiesStyle.buddy}> 
            <View style={buddiesStyle.buddyPicStyleView}>
                <ImageBackground source={{uri:user["profilePic"]}} resizeMode="cover" style={buddiesStyle.buddyPicStyle}>
                </ImageBackground>
            </View>
            <View style={buddiesStyle.buddyInfo}>
              <OtherUsername 
              style={buddiesStyle.buddyUsername} 
              username={" " + user["firstName"] + " " + user["lastName"]}
              onPress={() => {navigation.navigate("Buddy Profile", {email:user["email"]})}}>
              </OtherUsername>
              <Text style={buddiesStyle.buddyMajorAndYear}> {user["major"]}, {user["year"]}</Text>
            </View>
          </View>
        ))}
      </View>
      
    </View>
    ); 
};

export default BuddiesPageGeneral;
