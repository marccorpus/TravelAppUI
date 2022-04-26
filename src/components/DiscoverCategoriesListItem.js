import React from 'react';
import {StyleSheet, Text} from 'react-native';

import colors from '../constants/colors';

const DiscoverCategoriesListItem = ({index, text}) => {
  return (
    <Text style={[styles.text, styles.spacing, index === 0 && styles.active]}>
      {text}
    </Text>
  );
};

export default DiscoverCategoriesListItem;

const styles = StyleSheet.create({
  text: {
    color: colors.mediumGray,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  spacing: {
    marginLeft: 30,
  },
  active: {
    color: colors.orange,
  },
});
