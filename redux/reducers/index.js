import {combineReducers} from 'redux';
import genreListReducer from './genrelist';
import movieListReducer from './movielist';
import popularMovieReducer from './popularmovie';

export default combineReducers({
  genreListReducer,
  movieListReducer,
  popularMovieReducer,
});
