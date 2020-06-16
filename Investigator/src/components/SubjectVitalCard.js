import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import CardContainer from './CardContainer';
import Color from '../constants/Color';
import Spacer from './Spacer';

const SubjectVitalCard = props => {
  const {title, value, measure} = props;
  return (
    <CardContainer style={styles.card}>
      <Text style={styles.content1}>{title}</Text>
      <Spacer height={10} />
      <Text style={styles.content2}>{value}</Text>
      <Spacer height={5} />
      <Text style={styles.content3}>{measure}</Text>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
  },
  content1: {
    alignSelf: 'flex-start',
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Color.greyLight,
  },

  content2: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
    color: Color.greyLight,
  },

  content3: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: Color.greyLight,
  },
});
export default SubjectVitalCard;
