import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../constants/colors';

const Liked = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="heart" size={25} color={colors.orange} />
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 39,
    top: -32,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
