import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../../config';
import React, {useState, useEffect,useCallback, useLayoutEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, query, orderBy} from "firebase/firestore";
import { getDatabase, push, set, onValue } from "firebase/database";
import styles from '../../styles/generalstyles';
import registrationStyles from '../../styles/registrationStyles';
import buildProfileStyles from '../../styles/buildProfileStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton, EditButton} from '../../components/buttons';
import profileStyles from '../../styles/profileStyles';
import {useFonts,Poppins_400Regular} from '@expo-google-fonts/poppins';
import {getStorage, ref, uploadBytes,getDownloadURL, getMetadata} from 'firebase/storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import chatStyles from '../../styles/chatStyles';
import profileEditStyles from '../../styles/profileEditStyles';
import { ChatButtons } from '../../components/buttons';
import { GiftedChat } from 'react-native-gifted-chat'
import { OtherUsername } from '../../components/buttons';

const ChatWithOumniaPage = ({route, navigation}) => {
  console.log(route.params)
  const [messages, setMessages] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore();
  const currentUserEmail = route.params["currentUserEmail"]
  const receiverEmail = route.params["receiverEmail"]
  console.log(receiverEmail)
  const comp = currentUserEmail.localeCompare(receiverEmail)
  // the name of the document where we will find messages between curr user and user 2 is chats +
  //combo of their names:
  // if (comp <=0){
  //   chatDocName= 'chats' + currentUserEmail + receiverEmail
  // }else{
  //   chatDocName= 'chats' + receiverEmail + currentUserEmail
  // }
  chatDocName = "chatsoumnia@stanford.eduoumniachellah24@gmail.com"
  console.log(chatDocName)

  //load previous messages
  useLayoutEffect(() => {
    const chatCollection = collection(db, chatDocName);
    const q = query(chatCollection, orderBy("createdAt", "desc"))
    getDocs(q).then((querySnapshot) => {
      previousMessages = []
      querySnapshot.forEach((doc) => (
        previousMessages.push({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        })
      ))
      setMessages(previousMessages)
    })        
  }, [])
  
  //when user sends message: add it to the messages list and add it to chats doc 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {_id, createdAt, text, user} = messages[0]
    addDoc(collection(db, chatDocName), {
        _id,
        createdAt, 
        text,
        user,
      });
  }, []);
  
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth.currentUser.email,
      }}
    />
    ); 
};

export default ChatWithOumniaPage;
