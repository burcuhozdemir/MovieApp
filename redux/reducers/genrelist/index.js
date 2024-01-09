import {createSlice} from '@reduxjs/toolkit';

const genreListState = createSlice({
  name: 'genreList',
  initialState: {
    selectedCategoryId: 1,
    genreList: [],
    isLoading: false,
  },
  reducers: {
    getGenreList: (state, action) => {
      state.isLoading = true;
    },
    genreListSuccess: (state, action) => {
      state.genreList = action.payload?.genres;
      state.selectedCategoryId = state.genreList[0].id;
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
