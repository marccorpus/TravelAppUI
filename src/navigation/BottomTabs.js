import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="home" component={HomeScreen} />
      <BottomTab.Screen name="liked" component={LikedScreen} />
      <BottomTab.Screen name="profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
