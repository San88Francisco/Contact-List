import { createSlice } from "@reduxjs/toolkit"
import { fetchData } from "../operation/operation"
const initialState = {
   page: 1,
   items: [],
   isLoading: false,
   error: null
}

const pageSlice = createSlice({
   name: 'page',
   initialState,
   reducers: {
      setPage(state, action) {
         state.page = action.payload
      }
   },
   extraReducers: (builder) => {
      //* очікує результат запиту
      builder.addCase(fetchData.pending, (state, action) => {
         state.isLoading = true
      }),
         //* стан помилки
         builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         }),
         //* успішне виконання
         builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload.data
         })
   }
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer


