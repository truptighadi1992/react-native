import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PostScreen from './posts/PostScreen';

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <PostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default HomeScreen;
