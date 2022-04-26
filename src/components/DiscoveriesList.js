import React from 'react';
import {View, FlatList} from 'react-native';

import DiscoveriesListItem from './DiscoveriesListItem';

const DiscoveriesList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <DiscoveriesListItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DiscoveriesList;
