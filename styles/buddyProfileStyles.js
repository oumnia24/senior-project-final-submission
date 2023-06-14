
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
//Get window dimensions
let windowWidth;
let windowHeight;
const dims = () => {
    const {windowHeight, windowWidth} = useWindowDimensions();
}

const buddyProfileStyles = StyleSheet.create({
    whiteBoxMainInfo: {
        width: 345,
        height: 250,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'column',
        flex:1.8
    },
    buddyInfo:{
        flexDirection:'row',
        flex:2,
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor:'#FF502B'
    },
    contactBudy:{
        flex:1,
        width:345,
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center',
    },
    descriptionAndCourses:{
        position:'relative', 
        flex:3,
    },
    schoolNameAndEdit:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
    },
    schoolName:{
        fontSize:35,
        color: '#FFFFFF',
        fontFamily: 'Poppins_400Regular',
    },
    profilePicStyle:{
        backgroundColor:'#89A2FF',
        width:100,
        height:100,
        borderRadius:90,
        marginRight:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    contactButton:{
        width:140,
        height:40,
        backgroundColor:'#FF502B',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    contactButtonText:{
        color:'#FFFFFF',
        fontWeight:700,
        fontSize:20
    }
   
  });

  export default buddyProfileStyles;