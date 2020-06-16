import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CardContainer from './CardContainer';
import Color from '../constants/Color';
import Spacer from './Spacer';

const VitalCard = ({title, value, min, max}) => (
  <View>
    <CardContainer>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value == 0 ? '- -' : value}</Text>
        </View>
        <Text style={styles.title}>Pulse Oximeter</Text>
      </View>
      <Spacer height={5} />
      <View style={styles.row2}>
        <Text style={{position: 'absolute', left: 0, ...styles.title}}>
          Min: {min}
        </Text>
        <Text style={styles.title}>Max: {max}</Text>
      </View>
      <Spacer height={5} />
    </CardContainer>
  </View>
);

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  row2: {flexDirection: 'row', justifyContent: 'center'},
  title: {
    color: Color.greyLight,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  value: {
    color: Color.blueColor,
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
  },
});
export default VitalCard;
