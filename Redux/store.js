// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import crudSlice from './slices/counterSlice';
import BlogSlice from './slices/BlogSlice';

export const store = configureStore({
  reducer: {
    crud: crudSlice,
    blog: BlogSlice
    // Add other reducers here if you have multiple slices
  },
});
