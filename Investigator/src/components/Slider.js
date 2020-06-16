import React, {Fragment} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Color from '../constants/Color';

const Slider = ({title, rate}) => (
  <Fragment>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.rate}>{rate} %</Text>
      <Text style={styles.rateTitle}>{title}</Text>
    </View>
    <View style={styles.sliderParent}>
      <View
        style={{
          ...styles.sliderChild,
          width: `${rate}%`,
        }}
      />
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  sliderParent: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    backgroundColor: Color.blueLight,
  },
  sliderChild: {
    height: '100%',
    borderRadius: 4,
    backgroundColor: Color.blueColor,
  },
  rate: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    color: Color.greyLight,
  },
  rateTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    color: Color.greyLight,
  },
});
export default Slider;
