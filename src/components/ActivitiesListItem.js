import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import colors from '../constants/colors';

const ActivitiesListItem = ({image, title}) => {
  return (
    <View style={[styles.container, styles.spacing]}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ActivitiesListItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    color: colors.gray,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginTop: 8,
  },
  spacing: {
    marginLeft: 32,
  },
});
