import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/items/itemSlice';  

export const store = configureStore({
  reducer: {
    items: itemReducer,  // Add the item reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
