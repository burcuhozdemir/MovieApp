import React from 'react';
import {FlatList, Text, View} from 'react-native';
import style from './style';
import SingleHorizontalCardItem from '../SingleHorizontalCardItem/SingleHorizontalCardItem';

const VerticalMovieList = props => {
  const {movies, genres, loadMoreData, onPress} = props;

  return (
    <View style={style.mainView}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={movies}
        extraData={movies}
        renderItem={({item}) => {
          const category = genres.find(g => g.id == item.genre_ids[0]);
          return (
            <View style={style.item} key={item.id}>
              <SingleHorizontalCardItem
                uri={item.backdrop_path}
                rating={parseFloat(item.vote_average)}
                movieTitle={item.title}
                typeTitle={'Free'}
                typeNumber={2}
                movieCategory={category ? category.name : ''}
                releaseDate={item.release_date}
                time="148 Minutes"
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

export default VerticalMovieList;
