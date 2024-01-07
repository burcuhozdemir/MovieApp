import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  firstName: 'Tiffany',
  lastName: 'Smith',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {updateFirstName} = User.actions;
export default User.reducer;
