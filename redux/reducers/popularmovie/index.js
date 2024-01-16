import {createSlice} from '@reduxjs/toolkit';
const popularMovieState = createSlice({
  name: 'popularMovie',
  initialState: {
    popularMovie: {},
    popularMovieList: [],
    isLoading: false,
  },
  reducers: {
    getPopularMovie: (state, action) => {
      state.isLoading = true;
    },
    popularMovieSuccess: (state, action) => {
      state.popularMovie = action.payload;
      state.popularMovieList = [
        ...state.popularMovieList,
        ...action.payload?.results,
      ];
      state.isLoading = false;
    },
    popularMovieFailure: state => {
      state.isLoading = false;
    },
  },
});
export const {getPopularMovie, popularMovieSuccess, popularMovieFailure} =
  popularMovieState.actions;
export default popularMovieState.reducer;
