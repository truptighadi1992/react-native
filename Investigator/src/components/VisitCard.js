import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Color from '../constants/Color';

const VisitCard = props => {
  const {title, value} = props;

  return (
    <View style={{...cardStyle.right, ...props.style}}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const cardStyle = StyleSheet.create({
  right: {
    paddingHorizontal: 30,
    borderRightWidth: 1,
    borderRightColor: Color.greyLight,
  },
});

export default VisitCard;
