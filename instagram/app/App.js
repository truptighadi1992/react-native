import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Posts from '../app/screens/posts/post';

class App extends Component {
  render() {
    return <Posts />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default App;
