import React from 'react';
import {FlatList, Text, View} from 'react-native';
import style from './style';
import SingleVerticalCardItem from '../SingleVerticalCardItem/SingleVerticalCardItem';

const HorizontalMovieList = props => {
  const {movies, genres, loadMoreData, onPress} = props;

  return (
    <View style={style.mainView}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movies}
        extraData={movies}
        renderItem={({item}) => {
          const category = genres.find(g => g.id == item.genre_ids[0]);
          return (
            <View style={style.item} key={item.id}>
              <SingleVerticalCardItem
                uri={item.backdrop_path}
                rating={parseFloat(item.vote_average)}
                movieTitle={item.title}
                movieCategory={category.name}
                onPress={() => onPress(item)}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReachedThreshold={0.2}
        onEndReached={() => loadMoreData()}
      />
    </View>
  );
};

export default HorizontalMovieList;
