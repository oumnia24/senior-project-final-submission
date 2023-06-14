
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import {useWindowDimensions} from 'react-native';
import React, {useState, useEffect} from 'react';

let windowWidth;
let windowHeight;
const dims = () => {
    const {windowHeight, windowWidth} = useWindowDimensions();
}


const chatStyles = StyleSheet.create({
    searchBarView:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    searchBar:{
        width:345,
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        height:50,
        marginVertical:10,
        color:'#9E9E9E',
        fontSize:17,
        paddingLeft:10,
    },
    chatOrThreads:{
        flex:0.5,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    chatOrThreadsText:{
        fontSize:20
    },
    messages:{
        flex:4.5,
        backgroundColor:'#7B47BE36', 
    },
    message:{
        height:90,
        backgroundColor:'#FFFFFF',
        width:windowWidth,
        flexDirection:'row',
    },
    messageUserNameAndLastMessage:{
        flexDirection:'column',
        backgroundColor:'#FF502B',
        flex:2.3,
        justifyContent:'space-evenly',
    },
    messageTime:{
        backgroundColor:'#FFA5FF',
        flex:0.9,
        justifyContent:'center'
    },
    messageUserPic:{
        backgroundColor:'#FFA5FF',
        flex:0.8,
        justifyContent:'center',
        alignItems:'center'
    }
   
  });

  export default chatStyles;