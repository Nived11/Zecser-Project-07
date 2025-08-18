// src/redux/news/newsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NewsItem } from '../../../types/news';

interface NewsState {
  items: NewsItem[];
}

const initialState: NewsState = {
  items: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<NewsItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer; // ✅ This is the reducer
