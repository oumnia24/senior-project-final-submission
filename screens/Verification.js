import { Button, StyleSheet, Text, View, Pressable, Image, TextInput, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from '../styles/generalstyles';
import codeFieldStyles from '../styles/codeFieldStyles';
import registrationStyles from '../styles/registrationStyles';

const CELL_COUNT = 6;

const Verification = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    return (
      <LinearGradient style={styles.container} colors={['#4568DC', '#E100FF']}>
        <Text style={registrationStyles.registrationQuestion}> Enter your verification code.</Text>
        <Text style={registrationStyles.instructions}>We just sent a 6-digit verification code to (email).</Text>
        <Text style={registrationStyles.instructions}>It may take a moment to arrive.</Text>
        <Text style={[registrationStyles.instructions, {fontWeight:700}]}>Verification Code</Text>
        <SafeAreaView style={codeFieldStyles.root}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={codeFieldStyles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[codeFieldStyles.cell, isFocused && codeFieldStyles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </SafeAreaView>
        <Text style={registrationStyles.instructions}> Didn't get a code?</Text>
        <StartButton 
          top={50} 
          color={'#FFFFFF'}
          text='Verify'
          pressFunction = {() => navigation.navigate('Set Profile Pic')}
        />
      </LinearGradient> 
    );
};

export default Verification;

export const StartButton = (props) => (
// Move a box `View` component here
<Pressable style={[styles.button, {top: props.top, backgroundColor: props.color}]} 
            onPress={props.pressFunction}>
    <Text style={styles.buttonText}>{props.text}</Text> 
</Pressable>
);