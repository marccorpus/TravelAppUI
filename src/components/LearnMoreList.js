import React from 'react';
import {View, FlatList} from 'react-native';

import LearnMoreListItem from './LearnMoreListItem';

const LearnMoreList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <LearnMoreListItem {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LearnMoreList;
