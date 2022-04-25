import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="bottom-tabs" component={BottomTabs} />
    <Stack.Screen name="details" component={DetailsScreen} />
  </Stack.Navigator>;
};

export default NativeStack;
