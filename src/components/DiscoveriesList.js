import React from 'react';
import {StyleSheet, Pressable, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DiscoveriesListItem from './DiscoveriesListItem';

const DiscoveriesList = ({data, style}) => {
  const navigation = useNavigation();

  const pressHandler = item => {
    navigation.navigate('details', {item});
  };

  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={() => pressHandler(item)}>
            <DiscoveriesListItem {...item} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DiscoveriesList;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
