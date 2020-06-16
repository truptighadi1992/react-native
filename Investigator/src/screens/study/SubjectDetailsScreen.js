import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {fetchSubject} from '../../redux/actions/subjectActions';
import Color from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardContainer from '../../components/CardContainer';
import Spacer from '../../components/Spacer';
import CircularContainer from '../../components/CircularContainer';
import {ScrollView} from 'react-native-gesture-handler';
import SubjectVitalCard from '../../components/SubjectVitalCard';
import VisitCard from '../../components/VisitCard';

class SubjectDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const {route, navigation} = this.props;
    const {subject} = route.params;

    this.props.navigation.setOptions({
      headerTitle: subject.id,
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
            <Text style={styles.headerleftText}>Subjects</Text>
          </View>
        );
      },
    });
  }

  componentDidMount() {
    const {route, navigation} = this.props;
    const {subject} = route.params;

    this.focusListener = navigation.addListener('focus', () => {
      console.log('loadSubjectDetails called');
      this.props.loadSubjectDetails(subject.id);
    });
  }
  componentWillUnmount() {
    this.focusListener();
  }

  render() {
    const {isLoading, subjectFetched, error, route} = this.props;
    const {subject} = route.params;

    return (
      <View style={styles.screen}>
        <View style={styles.screen}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              {error != null ? (
                <Text>Details Not Found !</Text>
              ) : (
                <ScrollView>
                  {Object.keys(subjectFetched).length === 0 ? (
                    <Text>Details not set</Text>
                  ) : (
                    <View>
                      <CardContainer>
                        <View style={{flexDirection: 'row'}}>
                          <CircularContainer width={100} height={100}>
                            <Image
                              source={
                                subject.imageUrl != ''
                                  ? {uri: subject.imageUrl}
                                  : require('../../assets/images/person_photo.png')
                              }
                              style={{
                                width: 100,
                                height: 100,
                              }}
                            />
                          </CircularContainer>
                          <View>
                            <Text>
                              {subjectFetched.consent.lastName}{' '}
                              {subjectFetched.consent.firstName}
                            </Text>
                            <Text>
                              {subjectFetched.preScreening.age} years,
                              {subjectFetched.preScreening.gender}
                            </Text>
                            <Text>
                              Blood Group:{' '}
                              {subjectFetched.preScreening.bloodGroup}
                            </Text>
                            <Text>Health Issues: -</Text>
                            <Text>Allergies: -</Text>
                          </View>
                        </View>
                      </CardContainer>
                      <View style={styles.visitContainer}>
                        <VisitCard title="Status" value="-" />
                        <VisitCard title="Total Visits" value="-" />
                        <VisitCard
                          title="Last Visit"
                          value="-"
                          style={{borderRightWidth: 0}}
                        />
                      </View>
                      <View style={styles.infoRow}>
                        <SubjectVitalCard
                          title="Queries"
                          value="1"
                          measure="New"
                        />
                        <SubjectVitalCard
                          title="Issues Raised"
                          value="1"
                          measure="Deviations"
                        />
                      </View>
                      <View style={styles.infoRow}>
                        <SubjectVitalCard title="SPO2" value="99" measure="%" />
                        <SubjectVitalCard
                          title="Heart Rate"
                          value="79"
                          measure="bpm"
                        />
                      </View>
                      <View style={styles.infoRow}>
                        <SubjectVitalCard
                          title="Blood Pressure"
                          value="120/80"
                          measure="mmHg"
                        />
                        <SubjectVitalCard
                          title="Medical Records"
                          value={subjectFetched.medicalRecords.length}
                          measure="New"
                        />
                      </View>
                      <View style={styles.infoRow}>
                        <SubjectVitalCard
                          title="Medications"
                          value="98%"
                          measure="Completed"
                        />
                        <SubjectVitalCard
                          title="Schedule"
                          value="2.7%"
                          measure="Deviation"
                        />
                      </View>
                    </View>
                  )}
                </ScrollView>
              )}
            </View>
          )}
        </View>
      </View>
    );
  }
}

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
  screen: {
    backgroundColor: Color.greyBgColor,
    flex: 1,
    padding: 5,
  },
  visitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  infoRow: {flexDirection: 'row'},
});

const mapStateToProps = state => {
  return {
    isLoading: state.subject.isLoading,
    subjectFetched: state.subject.subject,
    error: state.subject.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSubjectDetails: subjectId => dispatch(fetchSubject(subjectId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubjectDetailsScreen);
