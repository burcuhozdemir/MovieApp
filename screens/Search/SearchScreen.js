import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Search from '../../components/Search/Search';
import style from './style';
import {getSearchMovieList} from '../../redux/reducers/searchmovie';
import {
  getGenreList,
  updateSelectedCategoryId,
} from '../../redux/reducers/genrelist';
import VerticalMovieList from '../../components/MovieList/VerticalMovieList';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState();
  const {movieList} = useSelector(state => state.searchMovieListReducer);
  const {selectedCategoryId, genreList} = useSelector(
    state => state.genreListReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreList());
    dispatch(getSearchMovieList({query: searchText}));
  }, [searchText, dispatch]);
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.background]}>
      <View style={style.search}>
        <Search
          placeholder={'Search..'}
          onSearch={text => setSearchText(text)}
        />
      </View>
      <View>
        <VerticalMovieList
          movies={movieList}
          genres={genreList}
          onPress={item => console.log(item.id)}
          loadMoreData={() => {
            console.log('load more...');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
