import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import progressBarSlice from './progressBarSlice';

const store = configureStore({
  reducer: {
    userSlice,
    progressBarSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
