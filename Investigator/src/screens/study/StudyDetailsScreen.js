import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Color from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '../../components/Slider';
import CardContainer from '../../components/CardContainer';
import Spacer from '../../components/Spacer';

const StudyDetailsScreen = ({route, navigation}) => {
  const {study} = route.params;

  navigation.setOptions({
    headerTitle: study.id,
    headerLeft: () => {
      return (
        <View style={styles.leftContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.pop();
            }}>
            <View style={{marginLeft: 10}}>
              <Ionicons name="ios-arrow-back" size={30} color="#fff" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerleftText}>My Studies</Text>
        </View>
      );
    },
  });

  return (
    <ScrollView>
      <View style={styles.status}>
        <Text style={styles.statusText}>{study.type}</Text>
        <Text style={styles.statusText}>{study.deviation} % Deviation</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('Subjects', {
            study: study,
          });
        }}>
        <CardContainer>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.statusText}>Subject</Text>
              <Spacer height={10} />
              <View style={styles.circularContainer}>
                <Text>{study.subjectCount}/20</Text>
              </View>
              <Spacer height={10} />
              <Text>Enrolled Subjects</Text>
            </View>
            <View style={{flex: 1}}>
              <Slider title="Dropout Rate" rate={study.dropoutRate} />
              <Spacer height={20} />
              <Slider title="Dropout Rate" rate={study.predictiveRate} />
            </View>
          </View>
        </CardContainer>
      </TouchableOpacity>

      <CardContainer>
        <Text>Open Issues</Text>
        <Text>{study.openIssues} Deviations</Text>
      </CardContainer>
      <CardContainer>
        <Text>Study performance timeline</Text>
        <Text>Delay Tag: {study.timeline.lagPeriod}</Text>
        <Text>Planned Completion: {study.timeline.plannedCompletion}</Text>
        <Text>Actual Completion: {study.timeline.actualCompletion}</Text>
      </CardContainer>
      <CardContainer>
        <Text>Sponsor: {study.sponsor.name}</Text>
        <Text>Contact Person: {study.sponsor.contactPerson}</Text>
        <Text>eCRF: {study.sponsor.eCRF}</Text>
      </CardContainer>
    </ScrollView>
  );
};

export default StudyDetailsScreen;

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerleftText: {
    fontFamily: 'Roboto-Light',
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  status: {
    flexDirection: 'row',
    backgroundColor: Color.greenLight,
    justifyContent: 'space-between',
    borderBottomColor: Color.greenColor,
    borderBottomWidth: 3,
    padding: 10,
    marginBottom: 10,
  },
  statusText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Color.blackColor,
  },
  circularContainer: {
    borderRadius: 100,
    borderColor: Color.blueColor,
    borderWidth: 4,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
