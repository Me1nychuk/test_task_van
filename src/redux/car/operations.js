import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../../services/carApi";

export const apiGetCars = createAsyncThunk("cars/get", async (_, thunkAPI) => {
  try {
    const data = await fetchCars();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const apiGetCarsMore = createAsyncThunk(
  "cars/getMore",
  async (page, thunkAPI) => {
    try {
      const data = await fetchCars(page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
