import React from 'react';
import {StyleSheet, ImageBackground, View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Location from '../components/Location';
import Details from '../components/Details';
import colors from '../constants/colors';

const DetailsScreen = ({route, navigation}) => {
  const {imageBig, title, location, description, price, rating, duration} =
    route.params.item;

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBig} style={styles.imageBackground}>
        <Pressable
          onPress={goBackHandler}
          style={({pressed}) => [styles.backButton, pressed && styles.pressed]}>
          <Ionicons name="chevron-back" color={colors.white} size={32} />
        </Pressable>

        <Text style={styles.title}>{title}</Text>

        <Location
          location={location}
          iconSize={20}
          iconColor={colors.white}
          fontSize={16}
          color={colors.white}
        />
      </ImageBackground>

      <Details
        description={description}
        price={price}
        rating={rating}
        duration={duration}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 0.5,
    padding: 20,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 64,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  pressed: {
    opacity: 0.75,
  },
});
