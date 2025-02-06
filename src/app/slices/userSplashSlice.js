import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userLoggedOn: false,
  userLoggedOut: false,
  userOnBoardingStatus: false,
  userOnBoardingData: null,
  userJoinInByEmail: false,
  userJoinByPhone: false,
  userIsPremium: false,
};

export const userSplashSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setUserLoggedOn: (state, action) => {
      state.userLoggedOn = action.payload;
    },
    setUserLoggedOut: (state, action) => {
      state.userLoggedOut = action.payload;
    },
    setUserOnBoardingStatus: (state, action) => {
      state.userOnBoardingStatus = action.payload;
    },
    setUserOnBoardingData: (state, action) => {
      state.userOnBoardingData = action.payload;
    },
    setUserJoinInByEmail: (state, action) => {
      state.userJoinInByEmail = action.payload;
    },
    setUserJoinByPhone: (state, action) => {
      state.userJoinByPhone = action.payload;
    },
    setUserIsPremium: (state, action) => {
      state.userIsPremium = action.payload;
    },
  },
});

export const {
  setUserLoggedOn,
  setUserLoggedOut,
  setUserOnBoardingData,
  setUserOnBoardingStatus,
  setUserJoinInByEmail,
  setUserJoinByPhone,
  setUserIsPremium,
} = userSplashSlice.actions;

export default userSplashSlice.reducer;
