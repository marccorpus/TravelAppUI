import React from 'react';
import {StyleSheet, Text} from 'react-native';

import ImageCard from './ImageCard';
import colors from '../constants/colors';

const LearnMoreListItem = ({image, title}) => {
  return (
    <ImageCard image={image} style={[styles.image, styles.spacing]}>
      <Text style={styles.title}>{title}</Text>
    </ImageCard>
  );
};

export default LearnMoreListItem;

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    padding: 10,
  },
  spacing: {
    marginLeft: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 18,
  },
});
