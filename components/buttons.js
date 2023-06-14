import React from 'react';
import styles from '../styles/generalstyles';
import registrationStyles from '../styles/registrationStyles';
import signInStyles from '../styles/signInStyles';
import profileStyles from '../styles/profileStyles';
import profileEditStyles from '../styles/profileEditStyles';
import chatStyles from '../styles/chatStyles';
import {Text, Pressable, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import buddiesStyle from '../styles/buddiesStyles';
import buddyRequestsStyles from '../styles/buddyRequestsStyles';


export const BackButton = (props) => (
    // Move a box `View` component here
    <Pressable
               onPress={props.onPress}>
      <Image source={require('../BackArrow.png')}></Image>
    </Pressable>
  );
export const ContinueButton = (props) => (
// Move a box `View` component here
<Pressable style={registrationStyles.continueButton} 
            onPress={props.pressFunction}>
    <Image source={require('../continueButton.png')}></Image>
</Pressable>
);
export const PasswordInfo = (props) => (
// Move a box `View` component here
<TextInput
        style={registrationStyles.passwordInfo}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        autocorrect = {false}
        secureTextEntry = {true}
/>
);
export const EmailInfo = (props) => (
    // Move a box `View` component here
    <TextInput
            style={registrationStyles.passwordInfo}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            autocorrect = {false}
            secureTextEntry = {false}
            autoCapitalize = 'none'
    />
    );
export const InstructionButton = (props) => (
    <Pressable onPress = {props.onPress}>
        <Text style={signInStyles.instructionButton}> {props.text}</Text>
    </Pressable>
)
export const NameInfo = (props) => (
// Move a box `View` component here
<TextInput
        style={registrationStyles.input}
        value={props.value}
        onChangeText={props.setFunction}
        placeholder={props.placeholder}
        autocorrect={false}
        //justifyContent = {props.justifyContent}
    />

);
export const StartButton = (props) => (
    // Move a box `View` component here
    <Pressable style={[styles.button, {marginTop: props.top, backgroundColor: props.color}]} 
                onPress={props.pressFunction}>
        <Text style={styles.buttonText}>{props.text}</Text> 
    </Pressable>
);
export const EditButton = (props) => {
    
    return(
        <Pressable onPress = {props.onPress}>
            <Image source={require('../assets/pencil.png')} style={profileStyles.editButton}></Image>
        </Pressable>
   )
}

export const EditPicButton = (props) => {
    
    return(
        <Pressable onPress = {props.onPress}>
            <Text style={profileEditStyles.editPicText}> Edit </Text>
        </Pressable>
   )
}
export const ChatButtons = (props) => {
    return(
        <Pressable onPress = {props.onPress}>
            <Text style={chatStyles.chatOrThreadsText}> {props.text} </Text>
        </Pressable>
   )
}
export const OtherUsername = (props) => {
    return(
        <Pressable onPress={props.onPress}>
            <Text style={props.style}>{props.username}</Text>
        </Pressable>
    )
}
export const FriendRequestsButton = (props) => {
    return(
        <Pressable onPress={props.onPress}>
            <Icon style={buddiesStyle.invitesIcon} name="group-add" size={35} color="white" />
        </Pressable>
    )
}
export const AcceptBuddyButton = (props) => {
    return(
        <Pressable onPress={props.onPress} style={buddyRequestsStyles.accept}>
            <Text style={buddyRequestsStyles.acceptText}>ACCEPT</Text>
        </Pressable>
    )
}
export const XButton = (props) => {
    return(
        <Pressable onPress={props.onPress}>
            <Icon name="close" size={25} color="white" />
        </Pressable>
    )
}