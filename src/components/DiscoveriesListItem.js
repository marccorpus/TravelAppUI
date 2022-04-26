import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

import ImageCard from './ImageCard';
import Location from './Location';

import colors from '../constants/colors';

const DiscoveriesListItem = ({image, title, location}) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={null}>
      <ImageCard image={image} style={[styles.image, styles.spacing]}>
        <Text style={styles.title}>{title}</Text>

        <Location
          location={location}
          iconSize={15}
          iconColor={colors.white}
          fontSize={12}
          color={colors.white}
        />
      </ImageCard>
    </Pressable>
  );
};

export default DiscoveriesListItem;

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    padding: 10,
  },
  spacing: {
    marginLeft: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontFamily: 'Lato-Bold',
    color: colors.white,
    fontSize: 18,
  },
});
