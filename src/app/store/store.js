import AsyncStorage from '@react-native-async-storage/async-storage';
// import splashReducer from './Slices/splashSlice';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userSplashSlice from '../slices/userSplashSlice';
import postSlice from '../slices/postSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const reducer = combineReducers({
  userSplashSlice: userSplashSlice,
  postSlice: postSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
