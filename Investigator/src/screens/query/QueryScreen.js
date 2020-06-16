import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import CardContainer from '../../components/CardContainer';
import VitalCard from '../../components/VitalCard';
import Color from '../../constants/Color';
import CustomButton from '../../components/CustomButton';

const options = {
  scopes: [
    Scopes.FITNESS_ACTIVITY_READ_WRITE,
    Scopes.FITNESS_BODY_READ_WRITE,
    Scopes.FITNESS_BLOOD_PRESSURE_READ_WRITE,
    Scopes.FITNESS_OXYGEN_SATURATION_READ_WRITE,
  ],
};

const DataTypes = ['WEIGHT', 'HEIGHT', 'BLOOD_PRESSURE', 'HEART_RATE'];
class QueryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: {},
      error: null,
      activityStart: false,
    };
    this.readData = this.readData.bind(this);
    this.authorizeUser = this.authorizeUser.bind(this);
  }

  authorizeUser() {
    this.setState({isLoading: true, data: {}, error: null});

    GoogleFit.authorize(options)
      .then(res => {
        console.log('authorized >>>', res);
        if (res.success) {
          this.readData();
        } else {
          this.setState({isLoading: false, error: res.message});
        }
      })
      .catch(err => {
        console.log('authorized err >>> ', err);
        this.setState({isLoading: false, error: err});
      });
  }

  readData() {
    for (let i = 0; i < DataTypes.length; i++) {
      const options = {
        startDate: '2017-01-01T00:00:17.971Z', // required
        endDate: new Date().toISOString(), // required
      };
      switch (DataTypes[i]) {
        case 'WEIGHT':
          GoogleFit.getWeightSamples(options, (error, response) => {
            if (response && response.length > 0) {
              let dataObj = {...this.state.data};
              dataObj['WEIGHT'] = response;
              this.setState({isLoading: false, data: dataObj});
              console.log(this.state.data);
            }
          });

        case 'HEIGHT':
          GoogleFit.getHeightSamples(options, (error, response) => {
            if (response && response.length > 0) {
              let dataObj = {...this.state.data};
              dataObj['HEIGHT'] = response;
              this.setState({isLoading: false, data: dataObj});
              console.log(this.state.data);
            }
          });

        case 'BLOOD_PRESSURE':
          GoogleFit.getBloodPressureSamples(options, (error, response) => {
            if (response && response.length > 0) {
              let dataObj = {...this.state.data};
              dataObj['BLOOD_PRESSURE'] = response;
              this.setState({isLoading: false, data: dataObj});
              console.log(this.state.data);
            }
          });

        case 'HEART_RATE':
          GoogleFit.getHeartRateSamples(options, (error, response) => {
            if (response && response.length > 0) {
              let dataObj = {...this.state.data};
              dataObj['HEART_RATE'] = response;
              this.setState({isLoading: false, data: dataObj});
              console.log(this.state.data);
            }
          });
      }
    }
  }
  render() {
    const {isLoading, data, error, activityStart} = this.state;

    return (
      <View style={styles.screen}>
        <VitalCard
          title="SPO2"
          value={data['SP02'] == undefined ? 0 : data['SP02'][0].value}
          min="90%"
          max="100%"
        />
        <VitalCard
          title="Heart Rate"
          value={
            data['HEART_RATE'] == undefined ? 0 : data['HEART_RATE'][0].value
          }
          min="58bpm"
          max="168bpm"
        />
        <VitalCard
          title="Blood Pressure"
          value={
            data['BLOOD_PRESSURE'] == undefined
              ? 0
              : `${data['BLOOD_PRESSURE'][0].value}/${
                  data['BLOOD_PRESSURE'][0].value2
                }`
          }
          min="80"
          max="120"
        />

        <View style={{marginHorizontal: 10}}>
          <CustomButton
            title="Start Activity"
            pressEvent={this.authorizeUser}
            style={{marginTop: 10}}
          />
        </View>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>{error != null && <Text>Not Authorized!</Text>}</View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.greyBgColor,
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 15,
  },
});
export default QueryScreen;
