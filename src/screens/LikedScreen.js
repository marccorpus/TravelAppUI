import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const LikedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Liked Screen</Text>
    </View>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
