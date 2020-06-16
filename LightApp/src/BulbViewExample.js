import React, {Component} from 'react';
import {StyleSheet, Text, View, requireNativeComponent} from 'react-native';

const BulbComp = requireNativeComponent('BulbComp');

class BulbViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {isOn: false};
    this._onStatusChange = this._onStatusChange.bind(this);
  }

  _onStatusChange = e => {
    this.setState({isOn: e.nativeEvent.isOn});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>This state of Bulb come from Native Code to JavaScript</Text>
          <Text>{this.state.isOn ? 'on' : 'off'}</Text>
          <Text>{this.state.isOn ? 'Bulb is On' : 'Bulb is Off'}</Text>
        </View>
        <BulbComp
          style={styles.bottom}
          isOn={this.state.isOn}
          onStatusChange={this._onStatusChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BulbViewExample;
