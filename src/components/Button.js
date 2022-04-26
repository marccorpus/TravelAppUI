import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

import colors from '../constants/colors';

const Button = ({onPress, text, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    padding: 16,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});
