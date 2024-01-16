import {createSlice} from '@reduxjs/toolkit';

const searchMovieListState = createSlice({
  name: 'searchMovieList',
  initialState: {
    movie: {},
    movieList: [],
    isLoading: false,
  },
  reducers: {
    getSearchMovieList: (state, action) => {
      state.isLoading = true;
    },
    searchMovieListSuccess: (state, action) => {
      state.movie = action.payload;
      state.movieList = action.payload?.results;
      state.isLoading = false;
    },
    searchMovieListFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {
  getSearchMovieList,
  searchMovieListSuccess,
  searchMovieListFailure,
} = searchMovieListState.actions;
export default searchMovieListState.reducer;
