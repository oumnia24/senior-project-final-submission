import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight: 400,
      fontSize: 48,
      color: '#FFFFFF',
      fontFamily: 'NerkoOne_400Regular',
      position: "relative",
      top: -100,
    },
    button:{
      position:"relative",
      alignItems: 'center',
      justifyContent: "center",
      width: 180,
      height: 42,
      borderColor:'#7B47BE',
      borderRadius: 32,
    },
    buttonText:{
      position: "absolute",
      fontWeight: 700,
      fontSize: 16,
      color: '#7B47BE',
    },
    mountainsImage:{
      position: 'absolute',
       bottom:0, 
       width: 392, 
       height: 71,
    },
    stringLightsImage:{
      position: 'absolute', 
      bottom:50, 
      width: 392, 
      height: 150,
    }
  
  });

export default styles;