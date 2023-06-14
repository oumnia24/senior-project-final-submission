import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView, FlatList, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from '../config';
import React, {useState,  Component, Fragment, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDoc, doc, updateDoc} from "firebase/firestore";
import SearchableDropdown from 'react-native-searchable-dropdown';

import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import buildProfileStyles from '../styles/buildProfileStyles';
import selectDropdownStyles from '../styles/selectDropdownStyles';
import {ContinueButton, BackButton, PasswordInfo, EmailInfo, InstructionButton} from '../components/buttons';
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios';
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import courseData from '../explore courses/courselisttest.json';
import { useRoute } from '@react-navigation/native';

// import database from '@react-native-firebase/database';


const EnterCourses = ({navigation, route}) => {
    const [courseList, setCourseList] = useState([]);
    const db = getDatabase();
    const email = route.params["email"];
    const fetchData = async () => {
      const tempList = [];
      const courseCollectionRef = ref(db, 'Course Collection');
      onValue(courseCollectionRef, (snapshot) => {
        const data = snapshot.val();
        for (let i = 0; i < 14666; i++) {
          tempList.push({
            id: i,
            name: data[i]
          });
        }
      });

      setCourseList(tempList);
      console.log("Course List is Set")
    };
    useEffect(() => {
      fetchData();
    }, []);
    

    const changeUserStatus = () => {
      //change user from new user to regular and navigate to profile
      console.log('changingStatus rn')
      usersDatabase = getFirestore(app);
      console.log(email)
      const docRef = doc(usersDatabase, "users", email);
      updateDoc(docRef, {
        newUser: false,
        courses: selectedItems,
      });
      navigation.navigate('Signed In')
      
    }
  
    
    const [selectedItems, setSelectedItems] = useState([

    ])   
    const handleItemSelect = (item) => {
       newItem = {
        id : item.id,
        name: item.name.substring(0, item.name.indexOf(' '))
       }
      //  item.name.substring(0, item.name.indexOf(' '))
        console.log(newItem)
        setSelectedItems((oldItems) => [...oldItems, newItem])
    }
    const handleItemRemove = (item) => {
        setSelectedItems((oldItems) => oldItems.filter((nondeletedItem) => nondeletedItem.id !== item.id));
    }
  return (
        <View style={buildProfileStyles.container}>
        <Text style={buildProfileStyles.instruction}> What courses are you taking this quarter? </Text>
        <SearchableDropdown
            multi={true}
            autoCorrect={false}
            selectedItems={selectedItems}
            onItemSelect={handleItemSelect}
            containerStyle={{ padding: 20 }}
            onRemoveItem={handleItemRemove}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            selectedElementColor = {'#222'}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140}}
            items={courseList}
            chip={true}
            chipStyle = {{
               backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 20,
                padding: 10,
            }}
            resetValue={false}
            
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    width: 280
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />
        <ContinueButton pressFunction={changeUserStatus}></ContinueButton>
        </View>
    ); 
};

export default EnterCourses;
