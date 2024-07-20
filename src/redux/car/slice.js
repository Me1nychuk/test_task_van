import { createSlice } from "@reduxjs/toolkit";
import { apiGetCars, apiGetCarsMore } from "./operations";

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  isError: false,
  page: 1,
};

const carSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    loadMore: (state) => {
      state.page = state.page + 1;
    },
    deleteItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiGetCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...action.payload];
      })
      .addCase(apiGetCars.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(apiGetCarsMore.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiGetCarsMore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(apiGetCarsMore.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});
export const { loadMore, deleteItems } = carSlice.actions;
export const carReducer = carSlice.reducer;
