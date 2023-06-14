import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import styles from '../styles/generalstyles';
import { StartButton } from '../components/buttons';


const WelcomePage = ({route, navigation}) => {
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
          <Text style={styles.logo}>SocialStudy</Text>
          <StartButton 
            text='GET STARTED' 
            top={50} 
            color={'#A9F0FF'} 
            pressFunction={()=> navigation.navigate('Enter Name and Email')}> </StartButton>
          <StartButton 
              text='SIGN IN' 
              top={70} 
              color={'#FFFFFF'}
              pressFunction = {() => navigation.navigate('Login Page')}> </StartButton>
                                          
          <Image style={styles.stringLightsImage} source={require('../stringlights.png')} />
          <Image style={styles.mountainsImage} source={require('../mountains.png')} />
        </LinearGradient> 
    );
  };

export default WelcomePage;