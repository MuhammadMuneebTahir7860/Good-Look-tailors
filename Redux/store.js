// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import crudSlice from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    crud: crudSlice,
    // Add other reducers here if you have multiple slices
  },
});
