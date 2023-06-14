import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../../config';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import styles from '../../styles/generalstyles';
import registrationStyles from '../../styles/registrationStyles';
import buildProfileStyles from '../../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton, EditButton, OtherUsername, XButton} from '../../components/buttons';
import profileStyles from '../../styles/profileStyles';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import {getStorage, ref, uploadBytes,getDownloadURL, getMetadata} from 'firebase/storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-screens';
import { SelectList } from 'react-native-dropdown-select-list';
import buddiesStyle from '../../styles/buddiesStyles';
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, orderBy, where, updateDoc} from "firebase/firestore";
import chatStyles from '../../styles/chatStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FriendRequestsButton } from '../../components/buttons';
import buddyRequestsStyles from '../../styles/buddyRequestsStyles';
import { AcceptBuddyButton } from '../../components/buttons';





const BuddyRequests = ({route, navigation}) => {
    const [receivedRequests, setReceivedRequests] = useState()
    const [requesters, setRequesters] = useState() //user info of the users who sent the friend requests
    const [hasRequestersLoaded, setHasRequestersLoaded] = useState(false);
    const db = getFirestore(app);
    const userCollection = collection(db, 'users');
    const auth = getAuth()
    const email = auth.currentUser.email
    const docRef = doc(db, "users", email); //current user's info in firebase
    //get the requester's profile pic:
    const fetchProfilePic = async (profilePicID) => {
      const storage = getStorage();
      const listRef = ref(storage, 'gs://socialstudy-56ca5.appspot.com/' + profilePicID);
      const url = await getDownloadURL(listRef);
      return url;
    };
    //Compare two requests, returns true if they are equal
    const areRequestsEqual = (req1, req2) => {
      return (
        req1.receiverId === req2.receiverId &&
        req1.sender === req2.sender &&
        req1.status === req2.status &&
        req1.timestamp.nanoseconds === req2.timestamp.nanoseconds &&
        req1.timestamp.seconds === req2.timestamp.seconds
      );
    };
    //Load the current user's received requests
    getDoc(docRef).then((docSnap) => {
      const data = docSnap.data()
      setReceivedRequests(data["receivedRequests"])
    })
    //get all the requesters:
    useEffect(() => {
      const fetchRequesters = async () => {
        console.log("entered, receivedReqs:", receivedRequests)
        requestersInfo = []
        if (receivedRequests.length == 0){ //this helps in case the user deletes all the requests they've received
          setRequesters(requestersInfo) 
        }else{
          receivedRequests.forEach((request) => {
            // console.log(receivedRequests)
              const q = query(userCollection, where("email", "==", request["sender"]));
              getDocs(q).then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                      const userInfo = doc.data();
                      fetchProfilePic(userInfo["profilePicRef"]).then((url) => {
                        userInfo["profilePic"] = url;
                        userInfo["request"] = request;
                        requestersInfo.push(userInfo);
                        if (requestersInfo.length === receivedRequests.length) {
                          setRequesters(requestersInfo);
                        }
                      });
                   });
              });
          });
        }
        
      }
      if (!hasRequestersLoaded && receivedRequests){
        fetchRequesters();
        setHasRequestersLoaded(true);
      }
    }, [receivedRequests, hasRequestersLoaded])
    //Reject friend request:
    const rejectRequest = async (request) =>{
      //Load the current user's received requests, remove the request at hand:
      console.log("todelete:", request)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()
      const receivedRequests = data["receivedRequests"]
      const updatedRequests = receivedRequests.filter((req) => !areRequestsEqual(req, request))
      updateDoc(docRef, {
        receivedRequests: updatedRequests,
      });
      await setReceivedRequests(updatedRequests);
      setHasRequestersLoaded(false);
      //remove the request from sender's sent requests
      const docRefSender = doc(db, "users", request["sender"]);
      const docSnapSender = await getDoc(docRefSender)
      const dataSender = docSnapSender.data()
      const sentRequestsSender = dataSender["sentRequests"]
      const updatedSentRequestsSender = sentRequestsSender.filter((req) => !areRequestsEqual(req, request))
      updateDoc(docRefSender, {
        sentRequests: updatedSentRequestsSender,
      });
    }
    //Accept friend request:
    const acceptRequest = async (request) =>{
      //remove the request from sender's sentinvites and receiver (current user)'s received invites
      rejectRequest(request);
      //add sender to current user's buddies
      getDoc(docRef).then((docSnap) => {
        const data = docSnap.data()
        const buddies = data["buddies"] || []
        const updatedBuddies = [...buddies, request["sender"]]
        updateDoc(docRef, {
            buddies: updatedBuddies,
        });
      })
      //add current user to sender's buddie
      docRef = doc(db, "users", sender)
      getDoc(docRef).then((docSnap) => {
        const data = docSnap.data()
        const buddies = data["buddies"] || []
        const updatedBuddies = [...buddies, sender]
        updateDoc(docRef, {
            buddies: updatedBuddies,
        });
      })
    }
    return (
      <View style={buddiesStyle.container}>
        <View style={buddiesStyle.schoolNameAndEdit}>
          <Text style={buddiesStyle.schoolName}> Stanford</Text>
        </View>
        <View style={buddyRequestsStyles.requestsAndBackButton}>
          <BackButton onPress={() => navigation.navigate("Buddies Page")}></BackButton>
          <View style={buddyRequestsStyles.requestsTitleView}>
              <Text style={buddyRequestsStyles.requestsTitle}>Friend Requests</Text> 
          </View>             
        </View>
        <View style={buddiesStyle.searchResults}>
            {requesters && requesters.map((requester, index) => (
                <View key={index} style={buddyRequestsStyles.request}>
                  <View style={buddyRequestsStyles.buddyPicStyleView}>
                    <ImageBackground source={{uri:requester["profilePic"]}} resizeMode="cover" style={buddyRequestsStyles.buddyPicStyle}>
                    </ImageBackground>
                  </View>
                  <View style={buddyRequestsStyles.requesterUsername}>
                    <Text  style={buddyRequestsStyles.requesterUsernameText}>{requester["firstName"]} {requester["lastName"]} {index}</Text>
                  </View>
                  <View style={buddyRequestsStyles.requestResponse}>
                    <AcceptBuddyButton onPress={() => acceptRequest(requester["request"])}></AcceptBuddyButton>
                    <XButton onPress={() => rejectRequest(requester["request"])}></XButton>
                  </View>
              </View>
            ))}
        </View>    
      </View>
      ); 
};

export default BuddyRequests;
