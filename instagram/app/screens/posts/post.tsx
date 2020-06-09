import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Posts = ({}) => (
 
    const [story,setStory] = useState('');

  <View>
    <Text>Instagram</Text>
    <TextInput placeholder="Add Story" value="story" onChange={(val) => setStory(val)}/>
  </View>
);

export default Posts;
