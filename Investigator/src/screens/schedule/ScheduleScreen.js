import React, {useState, Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import moment from 'moment';
import Color from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import CustomCalendar from '../../components/CustomCalendar';
//import CalendarScreen from '../CalendarScreen';
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '../../components/Slider';
import CardContainer from '../../components/CardContainer';
import Spacer from '../../components/Spacer';
import CircularContainer from '../../components/CircularContainer';

const appointments = [
  {
    id: '1234',
    time: '11:30',
    imageUrl: '',
    totalVisits: 1,
    type: 'Enrolled',
    age: 57,
    gender: 'Male',
    lastVisit: 'Screening',
  },
  {
    id: '2345',
    time: '12:30',
    imageUrl: '',
    totalVisits: 1,
    type: 'Enrolled',
    age: 30,
    gender: 'Female',
    lastVisit: 'Visit 1',
  },
  {
    id: '3456',
    time: '15:30',
    imageUrl: '',
    totalVisits: 0,
    type: 'Screening',
    age: 40,
    gender: 'Female',
    lastVisit: '',
  },
  {
    id: '4567',
    time: '16:30',
    imageUrl: '',
    totalVisits: 0,
    type: 'PreScreen',
    age: 50,
    gender: 'Male',
    lastVisit: '',
  },
];
const ScheduleScreen = ({navigation, route}) => {
  let today = moment().format('DD MMM YYYY');

  const [date, setDate] = useState(new Date(moment()));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    console.log(currentDate);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  navigation.setOptions({
    headerTitle: moment(date).format('DD MMM YYYY'),
    headerRight: () => {
      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.9} onPress={showDatepicker}>
            <View style={{marginRight: 30}}>
              <Ionicons name="ios-calendar" size={30} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <View style={{marginRight: 20}}>
              <Ionicons name="md-more" size={30} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      );
    },
  });

  const renderSchedule = itemData => {
    let schedule = itemData.item;
    return (
      <Fragment>
        <View style={styles.container}>
          <Text>{schedule.time}</Text>
          <Spacer width={10} />
          <View>
            <CircularContainer width={70} height={70}>
              <Image
                source={
                  schedule.imageUrl != ''
                    ? {uri: schedule.imageUrl}
                    : require('../../assets/images/person_photo.png')
                }
                style={{
                  width: 70,
                  height: 70,
                }}
              />
            </CircularContainer>
            <Spacer height={10} />
            <Text>Total Visits: {schedule.totalVisits}</Text>
          </View>
          <Spacer width={5} />
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 1}}>
                <Text>
                  {schedule.id} - {schedule.type}
                </Text>
                <Text>
                  {schedule.gender},{schedule.age}
                </Text>
                <Text>{schedule.id}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {}}
                style={{alignSelf: 'center'}}>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  color={Color.greyRightArrowColor}
                />
              </TouchableOpacity>
            </View>
            <Spacer height={20} />
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text>Last Visit: {schedule.lastVisit}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </Fragment>
    );
  };
  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.screen}>
        <FlatList
          data={appointments}
          renderItem={renderSchedule}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  divider: {
    width: '90%',
    marginLeft: '10%',
    borderBottomColor: Color.greyDividerColor,
    borderBottomWidth: 2,
  },
});
