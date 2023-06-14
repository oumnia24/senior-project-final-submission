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
import { SelectList } from 'react-native-dropdown-select-list';

const years = [
    {key:'1', value:'Freshman'},
    {key:'2', value:'Sophomore'},
    {key:'3', value:'Junior'},
    {key:'4', value:'Senior'},
]
const majors = [
    {key: '0', value: 'Aeronautics and Astronautics'},
    {key: '1', value: 'African and African American Studies'},
    {key: '2', value: 'African Studies'},
    {key: '3', value: 'American Studies'},
    {key: '4', value: 'Anthropology'},
    {key: '5', value: 'Applied and Engineering Physics'},
    {key: '6', value: 'Archaeology'},
    {key: '7', value: 'Architectural Design'},
    {key: '8', value: 'Art History'},
    {key: '9', value: 'Art Practice'},
    {key: '10', value: 'Asian American Studies'},
    {key: '11', value: 'Atmosphere / Energy'},
    {key: '12', value: 'Bioengineering'},
    {key: '13', value: 'Biology'},
    {key: '14', value: 'Biomechanical Engineering'},
    {key: '15', value: 'Biomedical Computation'},
    {key: '16', value: 'Chemical Engineering'},
    {key: '17', value: 'Chemistry'},
    {key: '18', value: 'Chicana/o - Latina/o Studies'},
    {key: '19', value: 'China Studies'},
    {key: '20', value: 'Civil and Environmental Engineering'},
    {key: '21', value: 'Classics'},
    {key: '22', value: 'Communication'},
    {key: '23', value: 'Community Health and Prevention Research'},
    {key: '24', value: 'Comparative Literature'},
    {key: '25', value: 'Comparative Studies in Race and Ethnicity'},
    {key: '26', value: 'Computer Science'},
    {key: '27', value: 'Creative Writing'},
    {key: '28', value: 'Dance (TAPS Minor)'},
    {key: '29', value: 'Democracy, Development, and the Rule of Law'},
    {key: '30', value: 'Digital Humanities'},
    {key: '31', value: 'Earth Systems'},
    {key: '32', value: 'East Asian Studies'},
    {key: '33', value: 'Economics'},
    {key: '34', value: 'Education'},
    {key: '35', value: 'Electrical Engineering'},
    {key: '36', value: 'Energy Resources Engineering'},
    {key: '37', value: 'Engineering Physics'},
    {key: '38', value: 'English'},
    {key: '39', value: 'Environmental Systems Engineering'},
    {key: '40', value: 'Ethics in Society'},
    {key: '41', value: 'European Studies'},
    {key: '42', value: 'Feminist, Gender, and Sexuality Studies'},
    {key: '43', value: 'Film and Media Studies'},
    {key: '44', value: 'French'},
    {key: '45', value: 'Geological Sciences'},
    {key: '46', value: 'Geophysics'},
    {key: '47', value: 'German Studies'},
    {key: '48', value: 'Global Studies'},
    {key: '49', value: 'History'},
    {key: '50', value: 'Honors in the Arts'},
    {key: '51', value: 'Human Biology'},
    {key: '52', value: 'Human Rights'},
    {key: '53', value: 'Iberian and Latin American Cultures'},
    {key: '54', value: 'International Policy Studies'},
    {key: '55', value: 'International Relations'},
    {key: '56', value: 'International Security Studies'},
    {key: '57', value: 'Iranian Studies'},
    {key: '58', value: 'Islamic Studies'},
    {key: '59', value: 'Italian'},
    {key: '60', value: 'Japanese'},
    {key: '61', value: 'Jewish Studies'},
    {key: '62', value: 'Korean'},
    {key: '63', value: 'Laboratory Animal Science'},
    {key: '64', value: 'Latin American Studies'},
    {key: '65', value: 'Linguistics'},
    {key: '66', value: 'Management Science and Engineering'},
    {key: '67', value: 'Materials Science and Engineering'},
    {key: '68', value: 'Mathematical and Computational Science'},
    {key: '69', value: 'Mathematics'},
    {key: '70', value: 'Mechanical Engineering'},
    {key: '71', value: 'Medieval Studies'},
    {key: '72', value: 'Middle Eastern Language, Literature and Culture'},
    {key: '73', value: 'Modern Languages'},
    {key: '74', value: 'Modern Thought and Literature'},
    {key: '75', value: 'Music'},
    {key: '76', value: 'Music, Science, and Technology'},
    {key: '77', value: 'Native American Studies'},
    {key: '78', value: 'Philosophy'},
    {key: '79', value: 'Philosophy and Religious Studies'},
    {key: '80', value: 'Physics'},
    {key: '81', value: 'Political Science'},
    {key: '82', value: 'Portuguese'},
    {key: '83', value: 'Product Design'},
    {key: '84', value: 'Psychology'},
    {key: '85', value: 'Public Policy'},
    {key: '86', value: 'Religious Studies'},
    {key: '87', value: 'Science, Technology, and Society'},
    {key: '88', value: 'Slavic Languages and Literatures'},
    {key: '89', value: 'Sociology'},
    {key: '90', value: 'South Asian Studies'},
    {key: '91', value: 'Spanish'},
    {key: '92', value: 'Statistics'},
    {key: '93', value: 'Sustainability'},
    {key: '94', value: 'Symbolic Systems'},
    {key: '95', value: 'Theater and Performance Studies'},
    {key: '96', value: 'Translation Studies'},
    {key: '97', value: 'Urban Studies'},
]


const EnterMajor = ({navigation, route}) => {

    const [userYear, setUserYear] = useState("");
    const [userMajor, setUserMajor] = useState("");
    const userEmail = route.params["email"];
    console.log("this is:", userEmail);
    console.log(userYear)
    console.log(route)

    setMajorYearAndNavigate = async () => {
      usersDatabase = getFirestore(app);
      console.log("this is email:", userEmail)
      const docRef = doc(usersDatabase, "users", userEmail);
      updateDoc(docRef, {
        major: userMajor,
        year: userYear, 
      });
      navigation.navigate("Enter Courses",{email:userEmail});
    }
    
    return (
      // <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <View style={buildProfileStyles.container}>
        <Text style={buildProfileStyles.instruction}> What year are you? </Text>
        <SelectList 
        setSelected={(val) => setUserYear(val)} 
        data={years} 
        save="value"
        boxStyles = {{marginVertical:10}}
        />
        <Text style={buildProfileStyles.instruction}> What's your major? </Text>
        <SelectList 
        setSelected={(val) => setUserMajor(val)} 
        data={majors} 
        save="value"
        boxStyles = {{marginVertical:10}}
        />
        <ContinueButton marginTop={50} pressFunction={setMajorYearAndNavigate}></ContinueButton>

      </View>
    ); 
};

export default EnterMajor;
