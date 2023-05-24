import { createSlice } from '@reduxjs/toolkit';

const categorieSlice = createSlice({
  name: 'categories',
  initialState: '',
  reducers: {
    getCategoryStatus: (state) => state,
  },
});

export const { getCategoryStatus } = categorieSlice.actions;
export default categorieSlice.reducer;
