
import {StyleSheet} from 'react-native';

const registrationStyles = StyleSheet.create({
    registrationQuestion: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 29,
        textAlign: 'center'
    },
    input: {
        height: 44,
        width: 120,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 73,
        marginLeft: 30,
        marginRight:10
    },
    emailInput: {
        height: 44,
        width: 120,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        textAlign: 'center',
        marginTop: 20,
        paddingRight: 3,
    },
    instructions: {
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 19,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 20,
    },
    continueButton:{
        height: 57,
        width: 60,
        borderRadius: 0,
        marginTop: 20,
    },
    backButton:{
        position: 'absolute',
        top:80,
        left:20,
    },
    passwordInfo:{
        backgroundColor:'#FFFFFF',
        width: 243,
        height:43,
        borderRadius:5,
        marginTop: 30,
        paddingLeft:10
        },
    insertPicImage:{
    width: 200,
    height: 200,
    opacity:2
    }
});

export default registrationStyles;