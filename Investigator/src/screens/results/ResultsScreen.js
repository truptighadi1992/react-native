import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import CardContainer from '../../components/CardContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../../constants/Color';
import Spacer from '../../components/Spacer';

const Labs = [
  {id: '1234-COPD1234', name: 'Arterial Blood Gas Test', test: 1},
  {id: '2345-COPD2345', name: 'Arterial Blood Gas Test', test: 1},
  {id: '6789-COPD6789', name: 'Haemogram', test: 1},
  {id: '6786-COPD6786', name: 'BioChemical Parameter', test: 1},
  {id: '4567-COPD4567', name: 'Thyroid Profile', test: 2},
  {id: '4566-COPD4566', name: 'Lipid Profile', test: 2},
  {id: '4563-COPD4563', name: 'Liver Function test', test: 2},
  {id: '4562-COPD4562', name: 'General test', test: 2},
];
const Diagnostics = [
  {id: '1234-COPD1234', name: 'General test', test: 3},
  {id: '2345-COPD2345', name: 'Pulmonary function test', test: 1},
];

const Results = {
  Labs: Labs,
  Diagnostics: Diagnostics,
};

const ResultsScreen = ({route, navigation}) => {
  const goToResultDetails = result => {
    navigation.navigate('ResultDetails', {
      routeName: route.name,
      result: result,
    });
  };
  const renderResult = itemData => {
    let result = itemData.item;
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
            <View style={{flex: 1}}>
              <Text>{result.id}</Text>
              <Spacer height={10} />
              <Text>{result.name}</Text>
            </View>
            <Text style={{alignSelf: 'flex-end'}}>Test :{result.test}</Text>
            <Spacer width={20} />
            <View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={goToResultDetails.bind(this, result)}>
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

  const resultList = Results[route.name];
  return (
    <View style={styles.screen}>
      <FlatList
        data={resultList}
        renderItem={renderResult}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ResultsScreen;

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
