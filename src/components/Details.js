import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Liked from './Liked';
import SectionTitle from './SectionTitle';
import SubDetails from './SubDetails';
import Button from './Button';

import colors from '../constants/colors';

const Details = ({description, price, rating, duration}) => {
  return (
    <View style={styles.container}>
      <Liked />

      <SectionTitle
        text="Description"
        style={{...styles.sectionTitle, ...styles.secondarySectionTitle}}
      />

      <Text style={styles.description}>{description}</Text>

      <View style={styles.subDetails}>
        <SubDetails title="PRICE" value={`$${price}`} valueCaption="/person" />

        <SubDetails title="RATING" value={rating} valueCaption="/5" />

        <SubDetails title="DURATION" value={duration} valueCaption=" hours" />
      </View>

      <Button onPress={null} title="Book Now" style={styles.button} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: -20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sectionTitle: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  secondarySectionTitle: {
    fontSize: 24,
  },
  description: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.mediumGray,
    marginTop: 20,
    marginHorizontal: 20,
  },
  subDetails: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginTop: 34,
    marginHorizontal: 20,
  },
});
