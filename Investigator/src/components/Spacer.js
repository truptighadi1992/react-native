import React from 'react';
import {View, Text} from 'react-native';

function Spacer(props) {
  return (
    <View
      style={{
        height: props.height ? props.height : 0,
        width: props.width ? props.width : 0,
      }}
    />
  );
}

export default Spacer;
