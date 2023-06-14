import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { useFonts, NerkoOne_400Regular } from '@expo-google-fonts/nerko-one';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import {app} from './config';
// import {app} from '../config.js';
import React, {useContext, useState,useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomePage from './screens/WelcomePage.js';
import Registration1 from './screens/Registration1.js';
import SetPassword from './screens/SetPassword';
import Verification from './screens/Verification';
import LoginPage from './screens/LoginPage';
import ForgotPassword from './screens/ForgotPassword';
import BuildProfile1 from './screens/BuildProfile1';
import HomePage from './screens/HomePage';
import SetProfilePic from './screens/SetProfilePic';
import EnterCourses from './screens/EnterCourses';
import EnterMajor from './screens/EnterMajor';
import SignedIn from './Profile';
import ProfilePage from './screens/ProfilePage';
import ProfilePageEdit from './screens/ProfilePageEdit';
import {Poppins_400Regular, Poppins_700Bold, Poppins_500Medium} from '@expo-google-fonts/poppins';
import RegistrationAndSignIn from './RegistrationAndSignIn';
import { onAuthStateChanged, setPersistence } from '@firebase/auth';
import { getAuth, inMemoryPersistence } from "firebase/auth";

// Initialize Firebase
// const auth = getAuth(app);
const Stack = createNativeStackNavigator();
// const Auth/enticatedUserContext = createContext({});

// const AuthenticatedUserProvider = ({children}) => {
//   const [user, setUser] = useState(null);
//   return (
//     <AuthenticatedUserContext.Provider value={{user, setUser}}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   )

// }

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const auth = getAuth(app);
  setPersistence(auth, inMemoryPersistence)
  useEffect(() => {
    const isUserLoggedIn = () => {
      auth.onAuthStateChanged(function(user){
        if (user){
          console.log("user is logged in")
          setLoggedIn(true)
        }else{
          console.log("user is not logged in")
          setLoggedIn(false)
        }
      })
    }
    isUserLoggedIn(); 
    }, []);
  console.log("loggedin?:", loggedIn)
  let [fontsLoaded] = useFonts({
    NerkoOne_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return null;
  }
  // const [user, setUser] = useContext(AuthenticatedUserContext)
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, 
  //     async authenticatedUser => {
  //       authenticatedUser ? setUser(authenticatedUser) : setUser(null);
  //       setLoading(false);
  //     }
  //   );
  //   return () => unsubscribe();
  // }, [user])
  // if (loading) { 
  //   return (
  //     <View>
  //       <Text>loading</Text>
  //     </View>
  //   )
  // }
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
          name ="Registration And Sign In"
          component={RegistrationAndSignIn}
          />
          <Stack.Screen 
          name= "Signed In"
          component={SignedIn}
          />
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
      

    
    
  );
}