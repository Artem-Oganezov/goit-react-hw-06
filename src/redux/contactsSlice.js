import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addFriend: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFriend: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFriend, deleteFriend } = slice.actions;

export const contactsSlice = slice.reducer;
