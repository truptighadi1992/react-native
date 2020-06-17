import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import _ from 'lodash';
import Color from '../constants/Color';

const CalendarsScreen = () => {
  const [selected, setSelected] = useState('');

  const onDayPress = day => {
    setSelected(day.dateString);
  };
  const today = moment();
  let currentDate = today.format('YYYY-MM-DD'); //'2020-06-16'
  const renderCalendarWithSelectableDate = () => {
    return (
      <Fragment>
        <Calendar
          current={currentDate}
          style={styles.calendar}
          hideExtraDays
          onDayPress={onDayPress}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: Color.blueColor,
              selectedTextColor: '#fff',
            },
          }}
        />
      </Fragment>
    );
  };

  return (
    <View style={styles.screen}>{renderCalendarWithSelectableDate()}</View>
  );
};

export default CalendarsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  calendar: {
    marginBottom: 10,
  },
});
