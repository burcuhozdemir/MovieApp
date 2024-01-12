import {createSlice} from '@reduxjs/toolkit';

const genreListState = createSlice({
  name: 'genreList',
  initialState: {
    selectedCategoryId: 0,
    genreList: [],
    isLoading: false,
  },
  reducers: {
    getGenreList: (state, action) => {
      state.isLoading = true;
    },
    genreListSuccess: (state, action) => {
      state.genreList = action.payload?.genres;
      state.isLoading = false;
    },
    genreListFailure: state => {
      state.isLoading = false;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});
export const {
  getGenreList,
  genreListSuccess,
  genreListFailure,
  updateSelectedCategoryId,
} = genreListState.actions;
export default genreListState.reducer;
