import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import colors from '../constants/colors';

const SubDetails = ({title, value, valueCaption}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>

      <Text style={styles.label}>
        <Text style={styles.value}>{value}</Text>
        {valueCaption}
      </Text>
    </View>
  );
};

export default SubDetails;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: colors.mediumGray,
    marginBottom: 8,
  },
  value: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: colors.orange,
  },
});
