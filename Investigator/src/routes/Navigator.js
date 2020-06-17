import React from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  NavigationActions,
  StackActions,
} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LoginScreen from '../screens/login/LoginScreen';

import StudiesScreen from '../screens/study/StudiesScreen';
import StudyDetailsScreen from '../screens/study/StudyDetailsScreen';
import SubjectsScreen from '../screens/study/SubjectsScreen';
import SubjectDetailsScreen from '../screens/study/SubjectDetailsScreen';

import AlertsScreen from '../screens/alerts/AlertsScreen';
import AlertDetails from '../screens/alerts/AlertDetails';

import QueryScreen from '../screens/query/QueryScreen';

import ScheduleScreen from '../screens/schedule/ScheduleScreen';

import ResultsScreen from '../screens/results/ResultsScreen';
import ResultDetails from '../screens/results/ResultDetails';

import CustomTab from '../components/CustomTab';
import Color from '../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const parentHeaderStyle = {
  headerStyle: {
    backgroundColor: Color.appBarBgColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },
  headerRight: () => (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{marginRight: 20}}>
        <Ionicons name="md-more" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  ),
};

const childHeaderStyle = {
  headerStyle: {
    backgroundColor: Color.appBarBgColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },
};
function StudyStack() {
  return (
    <Stack.Navigator initialRouteName="My Studies">
      <Stack.Screen
        name="My Studies"
        component={StudiesScreen}
        options={parentHeaderStyle}
      />
      <Stack.Screen
        name="StudyDetails"
        component={StudyDetailsScreen}
        options={childHeaderStyle}
      />
      <Stack.Screen
        name="Subjects"
        component={SubjectsScreen}
        options={childHeaderStyle}
      />
      <Stack.Screen
        name="SubjectDetails"
        component={SubjectDetailsScreen}
        options={childHeaderStyle}
      />
    </Stack.Navigator>
  );
}
function AlertsTopTab() {
  return (
    <TopTab.Navigator tabBar={props => <CustomTab {...props} />}>
      <TopTab.Screen name="AEs" component={AlertsScreen} />
      <TopTab.Screen name="Labs" component={AlertsScreen} />
      <TopTab.Screen name="Vitals" component={AlertsScreen} />
    </TopTab.Navigator>
  );
}
function AlertsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Critical Alerts"
        component={AlertsTopTab}
        options={parentHeaderStyle}
      />
      <Stack.Screen
        name="AlertDetails"
        component={AlertDetails}
        options={childHeaderStyle}
      />
    </Stack.Navigator>
  );
}
function QueryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Query"
        component={QueryScreen}
        options={parentHeaderStyle}
      />
    </Stack.Navigator>
  );
}
function ResultsTopTab() {
  return (
    <TopTab.Navigator tabBar={props => <CustomTab {...props} />}>
      <TopTab.Screen name="Labs" component={ResultsScreen} />
      <TopTab.Screen name="Diagnostics" component={ResultsScreen} />
    </TopTab.Navigator>
  );
}
function ResultsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Results"
        component={ResultsTopTab}
        options={parentHeaderStyle}
      />
      <Stack.Screen
        name="ResultDetails"
        component={ResultDetails}
        options={childHeaderStyle}
      />
    </Stack.Navigator>
  );
}
function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={parentHeaderStyle}
      />
    </Stack.Navigator>
  );
}
function HomeTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Color.blueColor,
        inactiveTintColor: '#9e9e9e',
        style: {height: 70},
        labelStyle: {fontSize: 12, fontFamily: 'Roboto-Medium'},
        tabStyle: {paddingVertical: 10},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'md-home';
          let iconSize = 28;

          switch (route.name) {
            case 'My Studies':
              iconName = focused ? 'md-medkit' : 'md-medkit';
              return <Ionicons name={iconName} size={iconSize} color={color} />;
            case 'Critical Alerts':
              iconName = focused ? 'md-alert' : 'md-alert';
              return <Ionicons name={iconName} size={iconSize} color={color} />;
            case 'Query':
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
              return <Ionicons name={iconName} size={iconSize} color={color} />;
            case 'Schedule':
              iconName = focused ? 'ios-calendar' : 'ios-calendar';
              return <Ionicons name={iconName} size={iconSize} color={color} />;
            case 'Results':
              iconName = focused ? 'md-list-box' : 'md-list-box';
              return <Ionicons name={iconName} size={iconSize} color={color} />;
          }
        },
      })}>
      <Tab.Screen
        name="My Studies"
        component={StudyStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('My Studies');
          },
        })}
      />
      <Tab.Screen
        name="Critical Alerts"
        component={AlertsStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Critical Alerts');
          },
        })}
      />
      <Tab.Screen
        name="Query"
        component={QueryStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Query');
          },
        })}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Schedule');
          },
        })}
      />
      <Tab.Screen
        name="Results"
        component={ResultsStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Results');
          },
        })}
      />
    </Tab.Navigator>
  );
}
const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeTab} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
