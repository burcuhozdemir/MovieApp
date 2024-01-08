import {createSlice} from '@reduxjs/toolkit';

const genreListState = createSlice({
  name: 'genreList',
  initialState: {
    genreList: [],
    isLoading: false,
  },
  reducers: {
    getGenreList: (state, action) => {
      state.isLoading = true;
    },
    genreListSuccess: (state, action) => {
      state.genreList = [...state.genreList, ...action.payload?.genres];
      state.isLoading = false;
    },
    genreListFailure: state => {
      state.isLoading = false;
    },
  },
});
export const {getGenreList, genreListSuccess, genreListFailure} =
  genreListState.actions;
export default genreListState.reducer;
