import React from 'react';
import {View, FlatList} from 'react-native';

import DiscoverCategoriesListItem from './DiscoverCategoriesListItem';

const DiscoverCategoriesList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <DiscoverCategoriesListItem index={index} {...item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DiscoverCategoriesList;
