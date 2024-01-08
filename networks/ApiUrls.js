import {Constants} from '../appconstants/AppConstants';

const BASE_URL = 'https://api.themoviedb.org/3/';
const GENRE_LIST = `genre/movie/list?api_key=${Constants.API_KEY}&language=en-US`;
export const ApiUrls = {
  BASE_URL,
  GENRE_LIST,
};
