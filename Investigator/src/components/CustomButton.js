import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../constants/Color';

const CustomButton = ({title, pressEvent, style}) => (
  <View style={{...styles.buttonContainer, ...style}}>
    <TouchableOpacity onPress={pressEvent}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Color.blueColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
export default CustomButton;
