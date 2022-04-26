import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const ImageCard = ({children, style, image}) => {
  return (
    <ImageBackground
      source={image}
      style={style}
      imageStyle={styles.imageStyle}>
      {children}
    </ImageBackground>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 20,
  },
});
