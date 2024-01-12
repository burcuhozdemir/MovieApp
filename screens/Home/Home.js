import React, {useState, useEffect} from 'react';
import style from './style';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import CarouselCards from '../../components/CarouselCards/CarouselCards';
import {
  getGenreList,
  updateSelectedCategoryId,
} from '../../redux/reducers/genrelist';
import {getPopularMovie} from '../../redux/reducers/popularmovie';
import GenreList from '../../components/GenreList/GenreList';
import HorizontalMovieList from '../../components/MovieList/HorizontalMovieList';
import OutlineButton from '../../components/OutlineButton/OutlineButton';

const Home = () => {
  const {selectedCategoryId, genreList} = useSelector(
    state => state.genreListReducer,
  );
  const [pageNumber, setPageNumber] = useState(1);
  const {movieList} = useSelector(state => state.popularMovieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreList());
    dispatch(getPopularMovie({page: pageNumber}));
  }, [pageNumber]);

  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <Image
            source={{
              uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
            }}
            style={style.image}
          />
          <View>
            <Title title={'Hello, John'} type={4} color={'#FFFFFF'} />
            <Title
              title={'Let’s stream your favorite movie'}
              type={5}
              color={'#92929D'}
            />
          </View>
          <View style={style.wishlist}>
            <FontAwesomeIcon icon={faHeart} color="#FB4141" size={20} />
          </View>
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search a title'} />
        </View>
        <View style={globalStyle.aCenter}>
          <CarouselCards />
        </View>
        <View style={style.categories}>
          <Title title={'Categories'} color={'#FFFFFF'} type={4} />
        </View>
        <GenreList
          genres={genreList}
          selectedCategoryId={selectedCategoryId}
          onPress={item => dispatch(updateSelectedCategoryId(item.id))}
          loadMoreData={() => {
            setPageNumber(pageNumber + 1);
          }}
        />
        <View style={style.popular}>
          <Title title={'Most Popular'} color={'#FFFFFF'} type={4} />
          <View style={style.button}>
            <OutlineButton title="See All" />
          </View>
        </View>
        <View style={style.movieContainer}>
          <HorizontalMovieList
            movies={movieList}
            genres={genreList}
            onPress={item => console.log(item.id)}
            loadMoreData={() => {
              setPageNumber(pageNumber + 1);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
