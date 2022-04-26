import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Avatar = ({image, style}) => {
  return <Image source={image} style={[styles.image, style]} />;
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
});
