// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import crudSlice from './slices/counterSlice';
import BlogSlice from './slices/BlogSlice';
import homeSlice from './slices/homeSlice';
import AuthSlice from './slices/AuthSlice';

export const store = configureStore({
  reducer: {
    crud: crudSlice,
    blog: BlogSlice,
    home: homeSlice,
    auth: AuthSlice
    // Add other reducers here if you have multiple slices
  },
});
