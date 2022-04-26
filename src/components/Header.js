import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Avatar from './Avatar';
import colors from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="menu-outline" color={colors.black} size={32} />
      <Avatar
        image={require('../assets/images/person.png')}
        style={{width: 52, height: 52}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
