import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
    user: { email: null, pasword: null },
    token: null,
    isLoggedIn: false,
  isRefreshing: false,
  };

  const registerFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  };
  
  const logInFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  };
  
  const logOutFulfilled = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  };
  
  const refreshUserPending = state => {
    state.isRefreshing = true;
  };
  
  const refreshUserFulfilled = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  };
  
  const refreshUserRejected = state => {
    state.isRefreshing = false;
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(refreshUser.pending, refreshUserPending)
        .addCase(refreshUser.fulfilled, refreshUserFulfilled)
        .addCase(refreshUser.rejected, refreshUserRejected)
        .addCase(register.fulfilled, registerFulfilled)
        .addCase(logIn.fulfilled, logInFulfilled)
        .addCase(logOut.fulfilled, logOutFulfilled);
    },
  });
  
  export const authReducer = authSlice.reducer;