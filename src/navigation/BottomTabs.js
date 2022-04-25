import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import ProfileScreen from '../screens/ProfileScreen';

import colors from '../constants/colors';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={32} />
          ),
        }}
      />
      <BottomTab.Screen
        name="liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart" color={color} size={32} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={32} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
