import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_STATE,
  reducers: {
    toggleItem: (state, action) => {
      const check = state.items.find((item) => item._id === action.payload._id);
      if (check) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.items.push(action.payload);
      }
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});
export const { toggleItem, clearItems } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
