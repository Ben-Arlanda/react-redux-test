import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Item {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ItemState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
};


// Async thunk to fetch items from the API
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('http://localhost:8080/api/items');  
    return response.data;  // Return the fetched data (list of items)
});

// Redux slice
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the loading, success, and error states
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch items';
      });
  },
});

export default itemSlice.reducer;