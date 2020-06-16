import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CardContainer = props => (
  <View style={{...styles.card, ...props.style}}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
export default CardContainer;
