import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Color from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '../../components/Slider';
import CardContainer from '../../components/CardContainer';
import Spacer from '../../components/Spacer';
import CircularContainer from '../../components/CircularContainer';

const SubjectScreen = ({route, navigation}) => {
  const {study} = route.params;

  navigation.setOptions({
    headerTitle: 'Subjects',
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
          <Text style={styles.headerleftText}>{study.id}</Text>
        </View>
      );
    },
  });

  const goToSubjectDetails = subject => {
    navigation.navigate('SubjectDetails', {
      subject: subject,
    });
  };

  const renderSubjectList = itemData => {
    let subject = itemData.item;
    return (
      <View style={styles.subjectItem}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <CircularContainer width={60} height={60}>
            <Image
              source={
                subject.imageUrl != ''
                  ? {uri: subject.imageUrl}
                  : require('../../assets/images/person_photo.png')
              }
              style={{
                width: 60,
                height: 60,
              }}
            />
          </CircularContainer>
          <Spacer width={10} />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View style={{flex: 1}}>
                <Text>{subject.id}</Text>
                <Text>{subject.subTitle}</Text>
              </View>
              <View>
                <Text>Open Issues :{subject.openIssues}</Text>
              </View>
              <Spacer width={10} />
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={goToSubjectDetails.bind(this, subject)}>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={20}
                    color={Color.greyRightArrowColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={study.subject}
        renderItem={renderSubjectList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SubjectScreen;

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
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subjectItem: {
    marginVertical: 10,
  },
  divider: {
    width: '100%',
    borderBottomColor: Color.greyDividerColor,
    borderBottomWidth: 2,
  },
});
