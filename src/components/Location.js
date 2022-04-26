import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Location = ({location, iconSize, iconColor, fontSize, color}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="location" size={iconSize} color={iconColor} />
      <Text style={[styles.text, {fontSize, color}]}>{location}</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    marginLeft: 8,
    fontFamily: 'Lato-Bold',
  },
});
