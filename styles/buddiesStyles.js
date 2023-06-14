
import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
//Get window dimensions
let windowWidth;
let windowHeight;
const dims = () => {
    const {windowHeight, windowWidth} = useWindowDimensions();
}

const buddiesStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#89A2FF',
        flexDirection: 'column',
        justifyContent:'flex-start'
    },
    searchBar:{
        width:300,
        height:45, 
        backgroundColor:'#FFFFFF', 
        borderRadius:10, 
        paddingLeft:10,
    },
    buddyTabs:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:windowWidth,
        padding:10,
        borderBottomColor:'#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buddyTabsText:{
        color:'#FFFFFF',
        fontSize:18,
    },
    searchBarView:{
        justifyContent:'center',
        alignItems:'center',
        flex:0.5,
    },
    schoolNameAndEdit:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    searchResults:{
        flex:5,
    },
    schoolName:{
        fontSize:35,
        color: '#FFFFFF',
        fontFamily: 'Poppins_400Regular',
        // paddingTop:20
    },
    invitesIcon:{
        marginHorizontal:20
    },
    buddy:{
        height:70,
        width:windowWidth,
        flexDirection:'row',
        marginTop:15,
    },
    buddyPicStyleView:{
        backgroundColor:'#89A2FF',
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
    buddyInfo:{
        flexDirection:'column',
        flex:2.3,
        justifyContent:'space-evenly',
    },
    buddyUsername:{
        fontSize:20
    },
    buddyMajorAndYear:{
        color:'#0000005E'
    },
    
    
    
   
  });

  export default buddiesStyle;