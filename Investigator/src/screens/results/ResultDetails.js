import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Spacer from '../../components/Spacer';

const ResultDetails = ({route, navigation}) => {
  const {routeName, result} = route.params;

  navigation.setOptions({
    headerTitle: routeName.substring(0, routeName.length - 1),
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
          <Text style={styles.headerleftText}>Results</Text>
        </View>
      );
    },
  });

  return (
    <View style={styles.screen}>
      <View style={styles.row}>
        <Text style={{flex: 1}}>{result.id}</Text>
        <Ionicons name="md-call" size={25} color={Color.blueColor} />
        <Spacer width={20} />
        <Ionicons name="md-mail" size={25} color={Color.blueColor} />
      </View>
      <Text>Male, 55 Years</Text>
      <View style={styles.row}>
        <Text>{result.name}</Text>
        <Ionicons name="md-document" size={30} color={Color.blueColor} />
      </View>
      <Text>Test: {result.test}</Text>
      <Text> Temperature :</Text>
      <Text>102 degrees</Text>
      <Spacer height={20} />
    </View>
  );
};

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
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '30%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Color.blueColor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: Color.blueColor,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
});
export default ResultDetails;
