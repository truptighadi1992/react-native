import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CircularContainer = props => {
  const {width, height} = props;
  return (
    <View style={{...styles.circle, width: width, height: height}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CircularContainer;
