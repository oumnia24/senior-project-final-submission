
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
//Get window dimensions
let windowWidth;
let windowHeight;
const dims = () => {
    const {windowHeight, windowWidth} = useWindowDimensions();
}

const buddyRequestsStyles = StyleSheet.create({
    request:{
        height:70,
        // backgroundColor:'#FFFFFF',
        width:windowWidth,
        flexDirection:'row',
    },
    requestsAndBackButton:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#FFA5FF',
    },
    requestsTitleView:{
        flex:1,
        alignItems:'center'
    },
    requestsTitle:{
        color:'#FFFFFF',
        fontSize:20
    },
    requesterPic:{
        backgroundColor:'#FFA5FF',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    requesterUsername:{
        flexDirection:'column',
        // backgroundColor:'#FF502B',
        flex:2,
        justifyContent:'space-evenly',
    },
    requestResponse:{
        // backgroundColor:'#FFA5FF',
        flex:1.5,
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center'
    },
    buddyPicStyleView:{
        // backgroundColor:'#89A2FF',
        width:70,
        height:70,
        borderRadius:90,
        marginRight:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    buddyPicStyle:{
        flex: 1,
        width:60,
        height:60,
        borderRadius:90,
        marginVertical:5,
        overflow: 'hidden'
    },
    requesterUsernameText:{
        fontSize:17,
        color:'#FFFFFF',
        fontWeight:700,
    },
    accept:{
        height:30,
        width:75,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'#A77DFF'
    },
    acceptText:{
        fontWeight:800,
        color:'#FFFFFF',
    }

})

export default buddyRequestsStyles;