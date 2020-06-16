import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Color from '../constants/Color';

const Customtab = ({state, descriptors, navigation, position}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.tabParent}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          let activeColor = isFocused ? '#fff' : Color.blueColor;
          let activeBgColor = isFocused ? Color.blueColor : '#fff';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={{...styles.tab, backgroundColor: activeBgColor}}>
              <Animated.Text style={{color: activeColor, ...styles.tabText}}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabParent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.blueColor,
    width: '80%',
    marginHorizontal: '10%',
    height: 36,
    marginVertical: 20,
  },
  tab: {
    flex: 1,
    borderRightWidth: 0,
    borderRightColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    borderRadius: 4,
  },
  tabText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
export default Customtab;
