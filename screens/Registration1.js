

import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useEffect, useState} from 'react';
import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import {BackButton, ContinueButton, NameInfo} from '../components/buttons';

const Registration1 = ({route, navigation}) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    useEffect(() => {
        setEmailErrorMessage('');
    }, []);
    
    const navigateToSetPassword = (email, firstName, lastName) => {
        // if (!email.endsWith('.edu')){
        //     setEmailErrorMessage("Please register with your school email: xxx@schoolName.edu")
        // }else if (!firstName){
        if (!firstName){
            setEmailErrorMessage("Please enter your first name")
        }else if (!lastName){
            setEmailErrorMessage("Please enter your last name")
        }else{
            navigation.navigate('Set Password', {email: email, firstName: firstName, lastName:lastName})
        }
    }
    
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <BackButton onPress={() => navigation.navigate('Welcome Page')}></BackButton>
        <Text style={registrationStyles.registrationQuestion}> What is your name?</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex:1}}> 
            <NameInfo placeholder={'First Name'} value={firstName} setFunction={setFirstName}> </NameInfo>
          </View>
          <View style={{flex:1}}> 
            <NameInfo placeholder={'Last Name'} value={lastName} setFunction={setLastName}> </NameInfo>
          </View>
        </View>
  
        <Text style={registrationStyles.registrationQuestion}> What's your school's email address?</Text>
        <TextInput
          style={registrationStyles.emailInput}
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize = "none"
          autocorrect = {false}
          placeholder={'.edu'}
        /> 
        <Text style={registrationStyles.instructions}> SocialStudy will send you an email with a verification code</Text>
        <ContinueButton pressFunction={() => navigateToSetPassword(email, firstName,lastName)}>
        </ContinueButton>
        <Text style={registrationStyles.instructions}> {emailErrorMessage}</Text>
        <Image style={styles.stringLightsImage} source={require('../stringlights.png')} />
        <Image style={styles.mountainsImage} source={require('../mountains.png')} />
      </LinearGradient>
    );
};

export default Registration1;