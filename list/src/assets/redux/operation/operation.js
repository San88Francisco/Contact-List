import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchData = createAsyncThunk('APIfetchData', async ({ page, favorite, all }, thunkAPI) => {
   try {
      const response = await axios.get(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact?page=${page}&${favorite || all}`
      );
      return { data: response.data };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});

export const deleteData = createAsyncThunk('APIdeleteData', async ({ id }, thunkAPI) => {
   try {
      const response = await axios.delete(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact/${id}`
      );
      return { data: response.data, id };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});

export const addData = createAsyncThunk('APIaddData', async ({ obj }, thunkAPI) => {
   try {
      const response = await axios.post(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact`, obj
      );
      return { data: response.data };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});

export const favoriteData = createAsyncThunk('APIfavoriteData', async ({ id, favorite }, thunkAPI) => {
   try {
      const response = await axios.put(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact/${id}`, { id, favorite }
      );
      return { data: response.data };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});

export const infoUserData = createAsyncThunk('APIinfoUserData', async ({ id }, thunkAPI) => {
   try {
      const response = await axios.put(
         `https://65d1f0ac987977636bfbb181.mockapi.io/Contact/${id}`, { id }
      );
      return { data: response.data };
   } catch (e) {

      return thunkAPI.rejectWithValue(e.message);
   }
});



