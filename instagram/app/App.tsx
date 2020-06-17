import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Routes from './routes/Routes';

import configureStore from './redux/store';
import {Provider} from 'react-redux';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
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
