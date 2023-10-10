import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  error: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
