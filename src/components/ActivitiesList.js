import React from 'react';
import {View, FlatList} from 'react-native';

import ActivitiesListItem from './ActivitiesListItem';

const ActivitiesList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ActivitiesListItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ActivitiesList;
