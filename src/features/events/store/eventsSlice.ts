// src/redux/news/newsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { EventsItem } from '../../../types/events';

interface EventsState {
  items: EventsItem[];
}

const initialState: EventsState = {
  items: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<EventsItem[]>) {
      state.items = action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer; // ✅ This is the reducer
