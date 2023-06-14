
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';

const profileEditStyles = StyleSheet.create({
    editDescription: {
        alignContent:'left',
        top:200,
        left:15
    },
    titles:{
        fontFamily:'Poppins_500Medium',
        color:'#FFFFFF',
        fontSize:20,
        marginVertical:5
        
    },
    editBox:{
        width:345,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        height:50
    },
    profilePic:{
        flex: 1,
        width:120,
        height:120,
        borderRadius:90,
        marginVertical:5,
        overflow: 'hidden',
    },
    profilePicView:{
        alignItems:'center',
        // justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        alignSelf:'center',
        width:130,
        height:130,
        borderRadius:90,
        top:150,
        
    },
    editPic:{
        top:160,
        alignItems:'center'
    },
    editPicText:{
        fontFamily:'Poppins_400Regular',
        fontSize:15,
        color:'#FFFFFF',
    }
   
  });

  export default profileEditStyles;