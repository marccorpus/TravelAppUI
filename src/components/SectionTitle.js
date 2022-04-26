import React from 'react';
import {StyleSheet, Text} from 'react-native';

import colors from '../constants/colors';

const SectionTitle = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default SectionTitle;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Bold',
    color: colors.black,
  },
});
