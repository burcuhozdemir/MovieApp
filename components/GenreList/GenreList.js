import React from 'react';
import {FlatList, View} from 'react-native';
import style from './style';
import Tab from '../Tab/Tab';

const GenreList = props => {
  const {genres, selectedCategoryId, onPress, loadMoreData} = props;

  return (
    <View style={style.mainView}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={genres}
        extraData={genres}
        renderItem={({item}) => (
          <View style={style.categoryItem} key={item.id}>
            <Tab
              onPress={() => onPress(item)}
              tabId={item.id}
              title={item.name}
              isInactive={item.id !== selectedCategoryId}
            />
          </View>
        )}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadMoreData()}
      />
    </View>
  );
};

export default GenreList;
