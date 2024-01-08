import {takeEvery, call, put} from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import {ApiUrls} from '../../../networks/ApiUrls';
import {
  genreListFailure,
  genreListSuccess,
  getGenreList,
} from '../../reducers/genrelist';

function* genreListApi(action) {
  try {
    console.log('>> List >> ', action);
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

const combineSagas = [takeEvery(getGenreList.type, genreListApi)];
export default combineSagas;
