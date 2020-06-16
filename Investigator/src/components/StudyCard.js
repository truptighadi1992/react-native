import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../components/Spacer';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Slider from '../components/Slider';

const StudyCard = ({study, handleStudyClick}) => {
  colorCode = {
    green: Color.greenColor,
    orange: 'orange',
    red: 'red',
  };
  return (
    <TouchableNativeFeedback onPress={handleStudyClick.bind(this, study)}>
      <View style={{...styles.card, borderLeftColor: colorCode[study.status]}}>
        <View style={styles.row1}>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 20,
                color: Color.blackColor,
              }}>
              {study.id}
            </Text>
            <Text style={styles.type}>{study.type}</Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 26,
                color: Color.blackColor,
              }}>
              {study.deviation} %
            </Text>
            <Text style={styles.type}>Deviation</Text>
          </View>
        </View>
        <Spacer height={8} />
        <View style={styles.row1}>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 18,
                color: Color.blueColor,
              }}>
              {study.subjectCount}/20 subjects
            </Text>
          </View>
          <View>
            <Ionicons
              name="ios-arrow-forward"
              size={20}
              color={Color.greyRightArrowColor}
            />
          </View>
        </View>
        <Spacer height={10} />
        <View style={styles.row1}>
          <View style={styles.sliderContainer}>
            <Slider title="Dropout Rate" rate={study.dropoutRate} />
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              title="Predictive Dropout Rate"
              rate={study.predictiveRate}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderLeftWidth: 3,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    width: '48%',
  },
  type: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: Color.greyLight,
  },
});

export default StudyCard;
