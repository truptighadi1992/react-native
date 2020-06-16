import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import CardContainer from '../../components/CardContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../../constants/Color';

const AEs = [
  {id: '1234-COPD1234', name: 'Fever & headache'},
  {id: '2345-COPD2345', name: 'Anaphylaxis'},
  {id: '6789-COPD6789', name: 'Skin Allergy'},
  {id: '4567-COPD4567', name: 'Wheezing'},
];
const Labs = [
  {id: '1234-COPD1234', name: 'Blood Culture'},
  {id: '2345-COPD2345', name: 'Blood Culture'},
  {id: '6789-COPD6789', name: 'Sputum Culture'},
  {id: '6786-COPD6786', name: 'Sputum Culture'},
  {id: '4567-COPD4567', name: 'Urine Culture'},
];
const Vitals = [
  {id: '1234-COPD1234', name: 'FEV1/FVC - 75%'},
  {id: '2345-COPD2345', name: 'Blood Pressure - 100/70'},
  {id: '6789-COPD6789', name: 'SPO2 -75%'},
  {id: '4567-COPD4567', name: 'Blood Pressure - 110/75'},
];

const Alerts = {
  AEs: AEs,
  Labs: Labs,
  Vitals: Vitals,
};

const AlertsScreen = ({route, navigation}) => {
  const goToAlertsDetails = alert => {
    navigation.navigate('AlertDetails', {
      routeName: route.name,
      alert: alert,
    });
  };
  const renderAlert = itemData => {
    let alert = itemData.item;
    return (
      <View>
        <CardContainer>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text>{alert.id}</Text>
              <Text>{alert.name}</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={goToAlertsDetails.bind(this, alert)}>
                <Ionicons
                  name="ios-arrow-forward"
                  size={20}
                  color={Color.greyRightArrowColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </CardContainer>
        <View style={styles.divider} />
      </View>
    );
  };

  const alertList = Alerts[route.name];
  return (
    <View style={styles.screen}>
      <FlatList
        data={alertList}
        renderItem={renderAlert}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AlertsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  divider: {
    width: '100%',
    borderBottomColor: Color.greyDividerColor,
    borderBottomWidth: 2,
  },
});
