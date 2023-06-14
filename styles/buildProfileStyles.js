
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';

const buildProfileStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#89A2FF',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center'
    },
    welcomeMessage: {
        fontSize:45,
        color: '#FFFFFF',
        fontFamily: 'Poppins_400Regular',
    },
    instruction: {
        fontSize:25,
        color: '#FFFFFF',
        fontFamily: 'Poppins_400Regular',
        marginHorizontal: 8,
        textAlign: 'center'
    },
    item: {
        fontSize:17,
        color: '#767079',
        width: 200,
        borderWidth: 1,
        borderColor: '#7B47BE',
        borderRadius: 10,
        
    }
   
  });

  export default buildProfileStyles;