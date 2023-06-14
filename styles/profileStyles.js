
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';


const profileStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#89A2FF',
        flexDirection: 'column',
    },
    schoolNameAndEdit:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        // flexDirection:'center',
        alignItems:'center',
        // backgroundColor:'#FF502B',
    },
    schoolName:{
        fontSize:35,
        color: '#FFFFFF',
        fontFamily: 'Poppins_400Regular',
    },
    editButton:{
        width:35,
        height:35,
        marginRight:10
    },
    whiteBoxMainInfo: {
        width: 345,
        height: 200,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row',
        flex:1.5
    },
    profilePicStyle:{
        backgroundColor:'#89A2FF',
        width:100,
        height:100,
        borderRadius:90,
        // marginLeft: 40,
        marginRight:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    descriptionAndCourses:{
        position:'relative', 
        flex:3,
    },
    userName: {
        fontFamily: 'Poppins_700Bold',
        fontWeight: 700,
        fontSize: 24,
        left: 19, 
        marginVertical: 14

    },
    userMajorAndClass:{
        fontFamily: 'Poppins_500Medium',
        fontWeight: 600,
        fontSize: 16,
    },
    majorAndClassInfo:{
        flexDirection: 'row',
        marginVertical:7,
        flexWrap:'wrap',
        width:220
        
    },
    majorAndClassSymbol:{
        marginLeft: 19
    },

    descriptionBox: {
        width: 345,
        height: 50,
        backgroundColor:'#FFFFFF',
        marginVertical:12,
        marginHorizontal:15,
        borderRadius: 10,
    },
    descriptionText: {
        paddingLeft:10,
        paddingTop:5,
        fontFamily: 'Poppins_400Regular'
    },
    currentCourses:{
        marginHorizontal: 15,
        fontFamily: 'Poppins_700Bold',
        fontSize:20,
    },
    
    image:{
        flex: 1,
        width:90,
        height:90,
        borderRadius:90,
        marginVertical:5,
        overflow: 'hidden'
    },
    courseBox: {
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 18,
        paddingVertical: 12,
        width:80,
        height:70,
        shadowColor: 'grey',
        shadowOffset: { width: 1.1, height: 1.1 },
        shadowOpacity: 0.5,
        shadowRadius: 8.0,
        
      },
      courseDept:{
        // fontSize:17,
        fontFamily: 'Poppins_700Bold',
        color:'#89A2FF',
      },
      courseNum:{
        fontFamily: 'Poppins_400Regular'
      },
      courseList:{
        marginLeft:10,
        marginTop:10,
        flexDirection:'row'
      }
   
  });

  export default profileStyles;