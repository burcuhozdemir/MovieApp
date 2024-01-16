import {takeEvery, call, put} from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import {ApiUrls} from '../../../networks/ApiUrls';
import {
  genreListFailure,
  genreListSuccess,
  getGenreList,
} from '../../reducers/genrelist';
import {
  movieListSuccess,
  movieListFailure,
  getMovieList,
} from '../../reducers/movielist';
import {
  popularMovieSuccess,
  popularMovieFailure,
  getPopularMovie,
} from '../../reducers/popularmovie';
import {
  getSearchMovieList,
  searchMovieListFailure,
  searchMovieListSuccess,
} from '../../reducers/searchmovie';

function* genreListApi(action) {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.GENRE_LIST,
      action.payload,
    );
    const result = response.data;
    yield put(genreListSuccess(result));
  } catch (error) {
    yield put(genreListFailure());
  }
}

function* movieListApi(action) {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.MOVIE_LIST,
      action.payload,
    );
    const result = response.data;
    yield put(movieListSuccess(result));
  } catch (error) {
    yield put(movieListFailure());
  }
}

function* popularMovieListApi(action) {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.POPULAR_MOVIE_LIST,
      action.payload,
    );
    const result = response.data;
    yield put(popularMovieSuccess(result));
  } catch (error) {
    yield put(popularMovieFailure());
  }
}

function* searchMovieListApi(action) {
  try {
    const response = yield call(
      AxiosService.getServiceData,
      ApiUrls.SEARCH_MOVIE(action.payload.query),
    );
    const result = response.data;
    yield put(searchMovieListSuccess(result));
  } catch (error) {
    yield put(searchMovieListFailure());
  }
}

const combineSagas = [
  takeEvery(getGenreList.type, genreListApi),
  takeEvery(getMovieList.type, movieListApi),
  takeEvery(getPopularMovie.type, popularMovieListApi),
  takeEvery(getSearchMovieList.type, searchMovieListApi),
];
export default combineSagas;
