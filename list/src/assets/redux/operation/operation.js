import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchData = createAsyncThunk('APIfetchData', async ({ pageTest, favorite, all }, thunkAPI) => {
   try {
      const response = await axios.get(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact?page=${pageTest}&${favorite || all}`
      );
      return { data: response.data };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});




