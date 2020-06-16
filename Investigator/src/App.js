import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from './redux/store';
import Navigator from './routes/Navigator';

//Configure store with rootreducer and rootsaga
const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
