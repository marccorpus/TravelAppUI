import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import DiscoverCategoriesList from '../components/DiscoverCategoriesList';
import DiscoveriesList from '../components/DiscoveriesList';
import ActivitiesList from '../components/ActivitiesList';
import LearnMoreList from '../components/LearnMoreList';

import discoverCategoriesData from '../data/discovery-categories-data';
import discoveriesData from '../data/discoveries-data';
import activitiesData from '../data/activities-data';
import learnMoreData from '../data/learn-more-data';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <SectionTitle
          text="Discover"
          style={{...styles.sectionTitle, ...styles.secondarySectionTitle}}
        />
        <DiscoverCategoriesList
          data={discoverCategoriesData}
          style={styles.list}
        />
        <DiscoveriesList data={discoveriesData} style={styles.list} />

        <SectionTitle
          text="Activities"
          style={{...styles.sectionTitle, ...styles.secondarySectionTitle}}
        />
        <ActivitiesList data={activitiesData} style={styles.list} />

        <SectionTitle
          text="Learn More"
          style={{...styles.sectionTitle, ...styles.secondarySectionTitle}}
        />
        <LearnMoreList data={learnMoreData} style={styles.list} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  sectionTitle: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  primarySectionTitle: {
    fontSize: 32,
  },
  secondarySectionTitle: {
    fontSize: 24,
  },
  list: {
    marginTop: 20,
  },
});
