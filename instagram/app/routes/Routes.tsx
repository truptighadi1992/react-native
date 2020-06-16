import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Button, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddPostScreen from '../screens/AddPostScreen';
import LikesScreen from '../screens/LikesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <TouchableOpacity activeOpacity={0.9}>
                <View style={{marginLeft: 10}}>
                  <Ionicons name="md-camera" size={30} color="#333" />
                </View>
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity activeOpacity={0.9}>
                <View style={{marginRight: 10}}>
                  <Ionicons name="md-paper-plane" size={30} color="#333" />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'md-search' : 'md-search';
            } else if (route.name === 'Add') {
              iconName = focused ? 'md-add-circle' : 'md-add-circle';
            } else if (route.name === 'Likes') {
              iconName = focused ? 'md-heart' : 'md-heart';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-person' : 'md-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#333',
          inactiveTintColor: 'grey',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddPostScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
