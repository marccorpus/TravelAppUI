import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Location from '../components/Location';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
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
        <TouchableOpacity onPress={goBackHandler} style={styles.backButton}>
          <Ionicons name="chevron-back" color={colors.white} size={32} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Location
          location={location}
          iconSize={20}
          iconColor={colors.white}
          fontSize={16}
          color={colors.white}
        />
      </ImageBackground>

      <View style={styles.details}>
        <View style={styles.likedContainer}>
          <FontAwesome name="heart" size={25} color={colors.orange} />
        </View>

        <SectionTitle
          text="Description"
          style={{...styles.sectionTitle, ...styles.secondarySectionTitle}}
        />

        <Text style={styles.description}>{description}</Text>

        <View style={styles.subDetails}>
          <View>
            <Text style={styles.subDetailsLabel}>PRICE</Text>
            <Text style={styles.subDetailsLabel}>
              <Text style={styles.subDetailsValue}>${price}</Text>/person
            </Text>
          </View>
          <View>
            <Text style={styles.subDetailsLabel}>RATING</Text>
            <Text style={styles.subDetailsLabel}>
              <Text style={styles.subDetailsValue}>{rating}</Text>/5
            </Text>
          </View>
          <View>
            <Text style={styles.subDetailsLabel}>DURATION</Text>
            <Text style={styles.subDetailsLabel}>
              <Text style={styles.subDetailsValue}>{duration}</Text> hours
            </Text>
          </View>
        </View>

        <Button onPress={null} text="Book Now" style={styles.button} />
      </View>
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
  details: {
    flex: 0.5,
    marginTop: -20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  likedContainer: {
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
  subDetailsLabel: {
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: colors.mediumGray,
    marginBottom: 8,
  },
  subDetailsValue: {
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    color: colors.orange,
  },
  button: {
    marginTop: 34,
    marginHorizontal: 20,
  },
});
