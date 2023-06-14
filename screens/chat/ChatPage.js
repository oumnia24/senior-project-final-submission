import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../../config';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc} from "firebase/firestore";


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

const ChatPage = ({route, navigation}) => {
  const auth = getAuth()
  return (
    <View style={profileStyles.container}>
      <View style={chatStyles.searchBarView}>
        <TextInput 
        style={chatStyles.searchBar} 
        onChangeText={() => {}} 
        maxLength={200}
        defaultValue= "Search"></TextInput>
      </View>
      <View style={chatStyles.chatOrThreads}>
          <ChatButtons text='Chat'></ChatButtons>
          <ChatButtons text='Threads'></ChatButtons>  
      </View>   
      <View style={chatStyles.messages}>
        <View style={chatStyles.message}>
          <View style={chatStyles.messageUserPic}>
            <Text>Pic</Text>
          </View>
          <View style={chatStyles.messageUserNameAndLastMessage}>
            <OtherUsername 
            username="Oumnia" 
            //send info about current user and who they're chatting with:
            onPress={() => navigation.navigate("Chat With Oumnia Page", {
              currentUserEmail: auth.currentUser.email,
              receiverEmail: 'oumniachellah24@gmail.com'
            })}>
            </OtherUsername>
            <Text>Last Message</Text>
          </View>
          <View style={chatStyles.messageTime}>
            <Text>Time</Text>
          </View>
          
        </View>
        
      </View>
    </View>
    ); 
};

export default ChatPage;
